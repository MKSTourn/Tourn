const InviteSchema = require('../schemas/unclaimedInvites.js');
// const uuid = require('uuid');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Invites = module.exports;

Invites.createPendingInvite = (facebookId, tournId, tournName) => new Promise((resolve, reject) => {
  InviteSchema.create({
    facebookId,
    tournId,
    tournName,
  }, (err, result) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(result);
  });
});

Invites.findAllWithFBId = (fbid) => new Promise((resolve, reject) => {
  InviteSchema.find({ facebookId: fbid }, (err, result) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(result);
  });
});
