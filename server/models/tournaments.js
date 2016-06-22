const TournamentSchema = require('../schemas/tournaments.js');

const Tournaments = module.exports;

Tournaments.create = (organizerid, name, type, rules) => new Promise((resolve, reject) => {
  TournamentSchema.create({
    organizerid,
    name,
    type,
    rules,
    roster: [{
      playerId: organizerid,
    }],
  }, (err, result) => {
    if (err) reject(err);
    resolve(result);
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

Tournaments.addChatMessage = (tournid, sender, message) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) reject(err);
    result.chatHistory.push({ sender, message });
    result.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});

Tournaments.addRosterPlayer = (tournid, playerId) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) reject(err);
    result.roster.push({ playerId });
    result.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});

Tournaments.advancePlayer = (tournid, playerId, match) => new Promise((resolve, reject) => {
  TournamentSchema.findById(tournid, (err, result) => {
    if (err) reject(err);

    const res = Math.floor(match / 2);
    const someFurtherMatch = (result.roster.length / 2) + res;

    result.bracket[match].winner = playerId;
    if(!result.bracket[someFurtherMatch]) {
      result.bracket[someFurtherMatch] = {};
      result.bracket[someFurtherMatch].playerA = playerId;
    } else {
      result.bracket[someFurtherMatch].playerB = playerId;
    }

    result.save((saveErr, saveResult) => {
      if (saveErr) reject(saveErr);
      resolve(saveResult);
    });
  });
});
