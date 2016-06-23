const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  organizerid: Schema.ObjectId,

  name: String,

  type: String,

  bracketSize: Number,
  registrationOpen: Boolean,
  tournState: String,

  // All messages for a given tournament
  chatHistory: [{
    sender: Schema.ObjectId,
    message: String,
  }],

  rules: String,

  // All players regardless of current status
  roster: [{
    playerId: Schema.ObjectId,
  }],

  // All current and previous rounds
  bracket: [{
    round: [{
      playerA: Schema.ObjectId,
      playerB: Schema.ObjectId,
      winner: Schema.ObjectId,
      status: String,
    }],
  }],
});

module.exports = mongoose.model('Tournament', tournamentSchema);
