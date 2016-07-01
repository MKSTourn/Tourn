const UsersSchema = require('../schemas/users.js');
// const uuid = require('uuid');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const Users = module.exports;

const Tournaments = require('./tournaments.js');
const UnclaimedInvites = require('./unclaimedInvites.js');

// Instantiation functions

Users.create = (name, fbid, picture) => new Promise((resolve, reject) => {
  console.log(name, fbid, picture);
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

Users.findByName = (name) => new Promise((resolve, reject) => {
  const search = { name: { $regex: name } };
  UsersSchema.findOne(search, (err, result) => {
    // console.log('FindByName result and search', result, search);

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
  // console.log('Users.createAlert');
  Users.findByName(invitee)
    .then((result) => {
    // console.log('Users.createAlert: findByName result: ', result);
      if (!result) {
        // console.log('Users.createAlert: findByName result: ', result);
        UnclaimedInvites.createUnclaimedInvite(invitee, tournId, tournName);

        return;
      }

      // console.log('All previous alerts', result.alerts);

      result.alerts.push({
        tournId,
        tournName,
        isInvite,
        message,
      });

      result.save((err) => {
        if (err) reject(err);
        // console.log('Users.createAlert: result alert =', result.alerts[0]);
        resolve(result.alerts[result.alerts.length - 1]);
      });
    });
});

Users.deleteAlert = (userid, alertid) => new Promise((resolve, reject) => {
  Users.findById(userid)
    .then((result) => {
      result.alerts.pull({ _id: alertid });
      result.save((err, saveResult) => {
        if (err) reject(err);
        resolve(saveResult);
      });
    });
});

Users.acceptInvite = (userid, alertid) => new Promise((resolve, reject) => {
  Users.findById(userid)
    .then((result) => {
      let resAlert = null;

      console.log('Erasing alert');
      result.alerts.forEach((alert) => {
        if (alert._id.toString() === alertid) {
          resAlert = alert;
        }
      });

      result.alerts.pull({ _id: alertid });

      console.log('User found');
      if (!result) {
        // console.log('Woe is me. Our user doesn\'t exist', userid);
        reject('User doesnt exist.');
        return;
      }

      Tournaments.findById(resAlert.tournId)
        .then((tourn) => {
          console.log('Tourn found');

          console.log('Pushing tourn');
          result.tournamentIds.push({
            tournId: tourn._id,
            tournName: tourn.name,
          });


          console.log('Saving...');
          result.save(() => {
            console.log('Returning if anything', resAlert);
            resolve(resAlert);
          });
        })
        .catch((err) => {
          console.log('What the fuck?', err);
        });
    });
});
