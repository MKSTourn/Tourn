const UsersSchema = require('../schemas/users.js');
// const uuid = require('uuid');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Users = module.exports;

const Tournaments = require('./tournaments.js');
const UnclaimedInvites = require('./unclaimedInvites.js');

// Instantiation functions

Users.create = (name, fbid, picture) => new Promise((resolve, reject) => {
  UsersSchema.create({ name, fbid, picture }, (err, user) => {
    if (err) { reject(err); return; }

    UnclaimedInvites.findAllWithFacebookId(fbid)
      .then((invites) => {
        if (invites.length !== 0) {
          invites.forEach((invite) => {
            user.alerts.push({
              tournId: invite.tournId,
              tournName: invite.tournName,
              isInvite: true,
              text: invite.message,
            });

            invite.remove();
          });
        }

        user.save((saveErr, result) => {
          if (saveErr) {
            reject(saveErr);
            return;
          }

          resolve(result);
        });
      });
  });
});

// Search functions

Users.findById = (userid) => new Promise((resolve, reject) => {
  UsersSchema.findById(userid, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Users.findByFacebookId = (facebookid) => new Promise((resolve, reject) => {
  UsersSchema.findOne({ fbid: facebookid }, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Users.findByName = (userName) => new Promise((resolve, reject) => {
  UsersSchema.findOne({ name: userName }, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});


Users.findByToken = (sessiontoken) => new Promise((resolve, reject) => {
  UsersSchema.findOne({ sessions: { token: sessiontoken } }, (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

Users.createAlert = (
  invitee, tournId, tournName, isInvite, message
) => new Promise((resolve, reject) => {
  console.log('Users.createAlert');
  Users.findByName(invitee)
    .then((result) => {
    console.log('Users.createAlert: findByName result: ', result);
      if (!result) {
        console.log('Users.createAlert: findByName result: ', result);
        UnclaimedInvites.createUnclaimedInvite(invitee, tournId, tournName);

        return;
      }

      result.alerts.push({
        message,
        tournId,
        tournName,
        isInvite,
      });

      result.save((err, saveResult) => {
        if (err) reject(err);
        console.log('Users.createAlert: result alert =', result.alerts[0]);
        resolve(result.alerts[0]);
      });
    });
});

Users.deleteAlert = (userid, alertid) => new Promise((resolve, reject) => {
  Users.findById(userid)
    .then((result) => {
      const newResult = result;
      newResult.alert = result.alert.map((alert) => {
        if (alert._id === ObjectId.fromString(alertid)) {
          return null;
        }
        return alert;
      });
      result.save((err, saveResult) => {
        if (err) reject(err);
        resolve(saveResult);
      });
    });
});

Users.acceptInvite = (userid, alertid) => new Promise((resolve, reject) => {
  Users.findById(userid)
    .then((result) => {
      if (!result) {
        console.log('Woe is me. Our user doesn\'t exist', userid);
        reject();
      }

      const newResult = result;
      newResult.alerts = result.alerts.map((alert) => {
        if (alert._id === ObjectId.fromString(alertid)) {
          Tournaments.findById(alert.tournId)
            .then((tourn) => {
              tourn.roster.push({ playerId: result._id });
              tourn.save((err) => {
                if (err) reject(err);
              });
              newResult.tournaments.push({
                tournId: tourn._id,
                tournName: tourn.name,
              });
              newResult.save((err) => {
                if (err) reject(err);
              });
            })
            .catch((err) => {
              reject(err);
            });
          return null;
        }
        return alert;
      });
      result.save((err, saveResult) => {
        if (err) reject(err);
        resolve(saveResult);
      });
    });
});
