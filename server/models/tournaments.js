require('babel-register');
const TournamentSchema = require('../schemas/tournaments.js');
const BracketHelper = require('../../client/src/utilities/bracket_helpers.jsx');

const users = require('./users.js');

const Tournaments = module.exports;

Tournaments.create = (organizerid, name, type) => new Promise((resolve, reject) => {
  console.log(organizerid, name, type);
  TournamentSchema.create({
    organizerid,
    name,
    type,
    bracketSize: 1,
    registrationOpen: true,
    roster: [{
      playerId: organizerid,
    }],
    start: false,
    invite: true,
  }, (err, result) => {
    if (err) reject(err);

    users.findById(organizerid)
      .then((user) => {
        user.tournamentIds.push({
          tournId: result._id,
          tournName: result.name,
        });
        user.save((saveErr) => {
          if (saveErr) reject(saveErr);
          resolve(result);
        });
      });
  });
});

Tournaments.findById = (tournamentid) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournamentid, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Tournaments.findByUser = (userid) => new Promise((resolve, reject) => {
  TournamentSchema.find({ roster: { playerId: userid } }, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Tournaments.addChatMessage =
  (tournid, authorId, authorName, message, timeStamp) => new Promise((resolve, reject) => {
    TournamentSchema.findById(tournid, (err, result) => {
      console.log('addChatMessage error gate');
      if (err) {
        reject(err);
        return;
      }

      console.log('addChatMessage null gate');
      if (!result) {
        reject('Tournament doesnt exist!');
        return;
      }
      result.chatHistory.push({ authorId, authorName, message, timeStamp });
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

Tournaments.startTourn = (tournid) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) reject(err);

    const endResult = result;

    endResult.start = true;
    endResult.invite = false;
    endResult.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});

Tournaments.addRosterPlayer = (tournid, playerId) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) {
      reject(err);
      return;
    }

    if (!result) {
      reject('Couldnt find tournament!');
      return;
    }
    const endResult = result;

    endResult.roster.push({ playerId });
    endResult.bracketSize = result.bracketSize ?
      BracketHelper.getBracketSize(endResult.roster.length) :
      2;
    endResult.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});

Tournaments.advancePlayer = (tournid, playerId, match) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) reject(err);

    const endResult = result;

    const someFurtherMatch = BracketHelper.getNextMatch(match, result.bracketSize);

    endResult.bracket[match].winner = playerId;
    if (!endResult.bracket[someFurtherMatch]) {
      endResult.bracket[someFurtherMatch] = {};
      endResult.bracket[someFurtherMatch].playerA = playerId;
    } else {
      endResult.bracket[someFurtherMatch].playerB = playerId;
    }

    endResult.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});
