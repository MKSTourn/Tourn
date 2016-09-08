require('babel-register');

const TournamentSchema = require('../schemas/tournaments.js');
const BracketHelper = require('../../client/src/utilities/bracket_helpers.jsx');
const users = require('./users.js');

const Tournaments = module.exports;

Tournaments.create = (organizerid, name, type, rules) =>
  new Promise((resolve, reject) => {
    console.log('Tournaments.create: organizerid, name, type =', organizerid, name, type);
    users.findById(organizerid)
      .then((userObject) => {
        TournamentSchema.create({
          organizerid,
          name,
          type,
          rules,
          bracketSize: 0,
          registrationOpen: true,
          tournStatus: 'Not started',
          roster: [],
          start: false,
          invite: true,
        }, (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          userObject.tournamentIds.push({
            tournId: result._id,
            tournName: result.name,
          });

          userObject.save((saveErr) => {
            if (saveErr) {
              console.log('Error saving newly created tournament');
              reject(saveErr);
              return;
            }

            Tournaments.addRosterPlayer(result, organizerid)
              .then(() => {
                resolve(result);
              });
          });
        });
      });
  });

Tournaments.findById = (tournamentid) =>
  new Promise((resolve, reject) => {
    TournamentSchema.findById(tournamentid, (err, result) => {
      if (err) {
        console.log('Tourn Not Found');
        reject(err);
        return;
      }
      resolve(result);
    });
  });

Tournaments.findByUser = (userid) =>
  new Promise((resolve, reject) => {
    TournamentSchema.find({
      roster: {
        playerId: userid,
      },
    }, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

Tournaments.addChatMessage = (tournid, authorId, authorName, authorPic, message, timeStamp) =>
  new Promise((resolve, reject) => {
    TournamentSchema.findById(tournid, (err, result) => {
      if (err) {
        console.log('addChatMessage error');
        reject(err);
        return;
      }

      if (!result) {
        console.log('Tournament doesnt exist');
        reject('Tournament doesnt exist!');
        return;
      }

      result.chatHistory.push({ authorId, authorName, authorPic, message, timeStamp });

      result.save((saveErr, saveResult) => {
        if (saveErr) {
          console.log('Chat Message save error', saveErr);
          reject(saveErr);
          return;
        }
        resolve(saveResult);
      });
    });
  });

Tournaments.startTourn = (tournid) =>
  new Promise((resolve, reject) => {
    TournamentSchema.findById(tournid, (err, result) => {
      console.log('startTourn');

      if (err) {
        console.log('startTourn: err =', err);
        reject(err);
        return;
      }

      if (!result) {
        console.log('startTourn: tournament not found!');
        reject('tournament not found');
        return;
      }

      const endResult = result;

      endResult.start = true;
      endResult.invite = false;
      endResult.tournStatus = 'In progress';

      console.log('startTourn: saving...!');

      endResult.save((saveErr, saveResult) => {
        console.log('startTourn: saveResult =', saveResult);
        console.log('startTourn: saveErr =', saveErr);
        if (saveErr) reject(saveErr);
        resolve(saveResult);
      });
    });
  });

Tournaments.addRosterPlayer = (tournid, playerId) =>
  new Promise((resolve, reject) => {
    users.findById(playerId)
      .then((playerObject) => {
        TournamentSchema.findById(tournid).then((result) => {
          if (!result || !playerObject) {
            console.log('Not found error', !!result, result, !!playerObject, playerObject);
            reject('Couldnt find a required piece of data!');
            return;
          }
          const endResult = result;

          console.log('Player data', playerObject);

          console.log('Attempt to add player', {
            playerId: playerObject._id,
            playerName: playerObject.name,
            playerPic: playerObject.picture,
          });

          if (endResult.roster.length >= 8) {
            reject('Max player size reached');
            return;
          }

          endResult.roster.push({
            playerId: playerObject._id,
            playerName: playerObject.name,
            playerPic: playerObject.picture,
          });

          endResult.bracketSize = BracketHelper.getBracketSize(endResult.roster.length);
          endResult.save((savErr) => {
            if (savErr) {
              console.log('Save Error!');
              reject(savErr);
              return;
            }

            console.log('Fillout!');

            Tournaments.fillOutBracket(tournid)
              .then((finalResult) => {
                const final = finalResult;
                const matchIndex = Math.floor((final.roster.length - 1) / 2);
                if (!final.bracket[matchIndex].playerA.playerName) {
                  console.log('Player A?', final.bracket[matchIndex].playerA);
                  final.bracket[matchIndex].playerA =
                  {
                    playerName: playerObject.name,
                    playerPic: playerObject.picture,
                    playerId: playerObject._id,
                  };
                } else {
                  console.log('Player B?', final.bracket[matchIndex].playerB);
                  final.bracket[matchIndex].playerB =
                  {
                    playerName: playerObject.name,
                    playerPic: playerObject.picture,
                    playerId: playerObject._id,
                  };
                }

                console.log('Final Save!', final);
                final.save((saveErr, saveResult) => {
                  if (saveErr) {
                    console.log('Save Error!');
                    reject(saveErr);
                    return;
                  }
                  resolve(saveResult);
                });
              });
          });
        });
      });
  });

Tournaments.fillOutBracket = (tournid) =>
  new Promise((resolve, reject) => {
    console.log('Tourn ID', tournid);
    Tournaments.findById(tournid)
      .then((tourn) => {
        console.log('Filling out...');

        while (tourn.bracket.length < tourn.bracketSize) {
          tourn.bracket.push({
            playerA: null,
            playerB: null,
            winner: null,
            status: 'Not Started',
          });
        }

        tourn.save((err, res) => {
          if (err) {
            console.log('Error hit');
            reject(err);
            return;
          }

          console.log('Resolving...');
          resolve(res);
        });
      });
  });

Tournaments.advancePlayer = (tournid, playerId, match) =>
  new Promise((resolve, reject) => {
    console.log('Model Advanced!', tournid, playerId, match);
    users.findById(playerId)
      .then((playerObject) => {
        if (!playerObject) {
          reject('Player not found!');
          return;
        }

        TournamentSchema.findById(tournid, (err, result) => {
          if (err) reject(err);

          const endResult = result;
          const someFurtherMatch = BracketHelper.getNextMatch(match, result.bracketSize);

          if (someFurtherMatch === null) {
            reject('Attempt to advance a non-existent or invalid match', someFurtherMatch);
            return;
          }

          if (someFurtherMatch === -1) {
            endResult.tournStatus = 'Concluded';
            endResult.bracket[match].status = 'Concluded';
            endResult.bracket[match].winner = {
              playerName: playerObject.name,
              playerId: playerObject._id,
              playerPic: playerObject.picture,
            };
            endResult.tournWinner = {
              playerName: playerObject.name,
              playerId: playerObject._id,
              playerPic: playerObject.picture,
            };

            endResult.save((saveErr, saveResult) => {
              if (saveErr) {
                reject(saveErr);
                return;
              }

              console.log('Saved result', saveResult.bracket[match]);

              resolve(playerObject);
            });
          } else {
            endResult.bracket[match].status = 'Concluded';
            endResult.bracket[match].winner = {
              playerName: playerObject.name,
              playerId: playerObject._id,
              playerPic: playerObject.picture,
            };
            if (!endResult.bracket[someFurtherMatch].playerA.playerName) {
              endResult.bracket[someFurtherMatch].playerA =
              {
                playerName: playerObject.name,
                playerId: playerObject._id,
                playerPic: playerObject.picture,
              };
            } else {
              endResult.bracket[someFurtherMatch].status = 'In progress';
              endResult.bracket[someFurtherMatch].playerB =
              {
                playerName: playerObject.name,
                playerId: playerObject._id,
                playerPic: playerObject.picture,
              };
            }

            endResult.save((saveErr, saveResult) => {
              if (saveErr) { reject(saveErr); return; }
              console.log('Saved result', saveResult.bracket[match]);
              resolve(playerObject);
            });
          }
        });
      });
  });
