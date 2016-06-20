const TournamentSchema = require('../schemas/tournaments.js');

const Tournaments = module.exports;

Tournaments.create = () => new Promise((resolve, reject) => {
  TournamentSchema.create({}, (err, result) => {
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
