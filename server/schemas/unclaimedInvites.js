//
// Unclaimed Invites Schema
//
// Mongoose schema for the Unclaimed Invites collection.
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unclaimedInvite = new Schema({
  tournId: Schema.ObjectId,
  tournName: String,
  facebookId: String,
});

module.exports = mongoose.model('UnclaimedInvite', unclaimedInvite);
