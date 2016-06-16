const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,

  // Facebook Identifier string
  fbid: String,

  // All session tokens for a user
  sessions: [{
    token: String,
  }],

  // All pending alerts for a user
  alerts: [{
    tournament: Schema.ObjectId,
    message: String,
  }],
});

module.exports = mongoose.model('User', userSchema);
