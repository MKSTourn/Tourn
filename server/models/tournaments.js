const TournamentSchema = require('../schemas/tournaments.js');

const Tournaments = module.exports;

Tournaments.create = () => new Promise((resolve, reject) => {
  TournamentSchema.create({}, (err, result) => {
    if (err) reject(err);
    resolve(result);
  })
});
