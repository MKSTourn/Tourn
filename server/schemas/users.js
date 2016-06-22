const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,

  // Facebook Identifier string
  fbid: String,

  // All pending alerts for a user
  alerts: [{
    tournament: Schema.ObjectId,
    isInvite: Boolean,
    message: String,
  }],
});

module.exports = mongoose.model('User', userSchema);
