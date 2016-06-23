const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,

  // Facebook Identifier string
  fbid: String,

  tournamentIds: [{
    tournId: Schema.ObjectId,
    tournName: String,
  }],

  // All pending alerts for a user
  alerts: [{
    tournId: Schema.ObjectId,
    isInvite: Boolean,
    message: String,
  }],
});

module.exports = mongoose.model('User', userSchema);
