const UsersSchema = require('../schemas/users.js');
const Users = module.exports;
const Tournaments = require('./tournaments.js');
const UnclaimedInvites = require('./unclaimedInvites.js');

// Instantiation functions

// Create a new user entry in the users collection
Users.create = (name, fbid, picture) =>
  new Promise((resolve, reject) => {
    console.log("Users.create: name, fbid, picture:", name, fbid, picture);
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

// Find and return user associated with the given user ID
// User ID is originally provided by MongoDB
Users.findById = (userId) =>
  new Promise((resolve, reject) => {
    UsersSchema.findById(userId, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

// Find and return user associated with the given facebook ID
// Facebook ID is provided when the user logs in with facebook
Users.findByFacebookId = (facebookId) =>
  new Promise((resolve, reject) => {
    UsersSchema.findOne({ fbid: facebookId }, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

// Find and return user associated with the given name (string)
Users.findByName = (name) =>
  new Promise((resolve, reject) => {
    const search = { name: { $regex: name, $options: 'i' } };
    UsersSchema.findOne(search, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

// Find and return user associated with the given sessionToken
Users.findByToken = (sessionToken) =>
  new Promise((resolve, reject) => {
    UsersSchema.findOne({ sessions: { token: sessionToken } }, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

// Create a new alert for the invitee and append it to that user's alert list in the database.
// The new alert is returned upon completion.
Users.createAlert = (invitee, tournId, tournName, isInvite, message) =>
  new Promise((resolve, reject) => {
    Users.findByName(invitee)
      .then((result) => {
        if (!result) {
          UnclaimedInvites.createUnclaimedInvite(invitee, tournId, tournName);

          return;
        }

        result.alerts.push({
          tournId,
          tournName,
          isInvite,
          message,
        });

        result.save((err) => {
          if (err) reject(err);
          resolve(result.alerts[result.alerts.length - 1]);
        });
      });
  });

// Delete an alert from a user's alert list
Users.deleteAlert = (userId, alertId) =>
  new Promise((resolve, reject) => {
    Users.findById(userId)
      .then((result) => {
        result.alerts.pull({ _id: alertId });
        result.save((err, saveResult) => {
          if (err) reject(err);
          resolve(saveResult);
        });
      });
  });

// Accept an invite and enter the given user into the associated tournament
// The alert will be additionally be deleted from the user's alert list and
// returned to caller
Users.acceptInvite = (userId, alertId) =>
  new Promise((resolve, reject) => {
    Users.findById(userId)
      .then((result) => {
        let resAlert = null;

        console.log('Users.acceptInvite: Erasing alert');
        result.alerts.forEach((alert) => {
          if (alert._id.toString() === alertId) {
            resAlert = alert;
          }
        });

        result.alerts.pull({ _id: alertId });

        console.log('Users.acceptInvite: User found');
        if (!result) {
          // console.log('Woe is me. Our user doesn\'t exist', userId);
          reject('User doesnt exist.');
          return;
        }

        Tournaments.findById(resAlert.tournId)
          .then((tourn) => {
            console.log('Users.acceptInvite: Tourn found');

            console.log('Users.acceptInvite: Pushing tourn');
            result.tournamentIds.push({
              tournId: tourn._id,
              tournName: tourn.name,
            });


            console.log('Users.acceptInvite: Saving...');
            result.save(() => {
              console.log('Users.acceptInvite: Returning if anything', resAlert);
              resolve(resAlert);
            });
          })
          .catch((err) => {
            console.log('Users.acceptInvite: Error finding tournament by ID', err);
          });
      });
  });
