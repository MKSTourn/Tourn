const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  organizerid: Schema.ObjectId,

  name: String,

  type: String,

  bracketSize: Number,

  // Registration open
  invite: Boolean,

  // Tournament started
  start: Boolean,

  // Tournament status string
  // Litterally all it exists to be.
  tournStatus: String,

  tournWinner: Schema.ObjectId,

  // All messages for a given tournament
  chatHistory: [{
    authorId: Schema.ObjectId,
    authorName: String,
    message: String,
    timeStamp: String,
  }],

  rules: String,

  // All players regardless of current status
  roster: [{
    playerId: Schema.ObjectId,
  }],

  // All current and previous rounds
  bracket: [{
    playerA: { playerName: String, playerId: Schema.ObjectId },
    playerB: { playerName: String, playerId: Schema.ObjectId },
    winner: { playerName: String, playerId: Schema.ObjectId },
    status: String,
  }],
});

module.exports = mongoose.model('Tournament', tournamentSchema);
