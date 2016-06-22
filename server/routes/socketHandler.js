require('babel-register');
const INITIAL_STATE = require('../../data/state.jsx');
const tournaments = require('../models/tournaments.js');
const users = require('../models/users.js');

module.exports.socket = function socketAttachment(io) {
  io.on('connection', (socket) => {
    if (socket.request && socket.request.user) {
      console.log(socket.request.user);
      socket.join(socket.request.user._id);
    }
    // No need for this event.
    // Client automatically will receive logged state
    // when server detects user is logged in
    // Server will push down LoggedIn initial state when this
    // happens
      console.log(socket.request.user);
      socket.join(socket.request.user._id);
      socket.emit('set_state', INITIAL_STATE);

        socket.emit('received-state', INITIAL_STATE);


      // Client submits newly created tournament data,
      // Server adds tournament to db,
      // Send that user the updated state with:
      //   User's tournament list updated with new tourn ID,
      //   User's isOrganizer property set to TRUE,
      //   User's tournament object updated with new tourn ID
      socket.on('new_tourn', (data) => {
        console.log('new_tourn', data);
        tournaments.create(
          socket.request.user._id,
          data.entry.name,
          data.entry.type,
          data.entry.rules
        )
        .then((result) => {
          socket.emit('new_tourn_success', result);
          socket.join(result._id);
        })
        .catch((err) => {
          console.log('Tournament creation error: ', err);
          socket.emit('new_tourn_fail');
        });
      });

      // Client submits ID of tournament they want to view
      // Server retrieves latest state of that tournament from db
      // Server sends back new tournament object
      socket.on('select_tourn', (data) => {
        console.log('select_tourn', data);
        if (data.to != null) {
          console.log('sending back');
          socket.join(data.to);
          tournaments.findById(data.entry.tournId)
            .then((result) => {
              if (result) {
                socket.emit('select_tourn_success', result);
              } else {
                socket.emit('select_tourn_fail');
              }
            });
        } else {
          socket.emit('select_tourn_fail');
        }
      });

      // Client sends ID of alert they want deleted
      // Server updates user's alert list in db with alert removed
      // Server sends back new user data with alert list updated
      socket.on('delete_alert', (data) => {
        console.log('delete_alert', data);
        users.deleteAlert(socket.request.user._id, data.entry.alertid)
          .then(() => {
            socket.emit('delete_alert_success');
          })
          .catch(() => {
            socket.emit('delete_alert_fail');
          });
      });

      // Client (tournament organizer) sends tourn ID, matchIndex, and winner
      // Server does the following:
      //   Validates that user is the organizer and calculates next match
      //   Updates bracket for that tournament in db
      // Server sends back new tournament state to all users
      socket.on('update_bracket', (data) => {
        console.log('update_bracket', data);
        if (data.to != null) {
          console.log('sending back');
        socket.emit('new_tourn_success');
        socket.emit('new_tourn_fail');
      }
    });

    // Client submits ID of tournament they want to view
    // Server retrieves latest state of that tournament from db
    // Server sends back new tournament object
    socket.on('select_tourn', (data) => {
      console.log('select_tourn', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
          io.to(data.to).emit('user_joined', socket.request.user.name);
          socket.join(data.to);
        }

        socket.emit('select_tourn_success');
        socket.emit('select_tourn_fail');
      }
    });

    // Client sends ID of alert they want deleted
    // Server updates user's alert list in db with alert removed
    // Server sends back new user data with alert list updated
    socket.on('delete_alert', (data) => {
      console.log('delete_alert', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
        }

        socket.emit('delete_alert_success');
        socket.emit('delete_alert_fail');
      }
    });

    // Client (tournament organizer) sends tourn ID, matchIndex, and winner
    // Server does the following:
    //   Validates that user is the organizer and calculates next match
    //   Updates bracket for that tournament in db
    // Server sends back new tournament state to all users
    socket.on('update_bracket', (data) => {
      console.log('update_bracket', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
        }

        socket.emit('update_bracket_success');
        socket.emit('update_bracket_fail');
      }
    });

    // Client sends ID of tournament they wish to accept an invite to
    // Server does the following:
    //   Adds user to tournament roster
    //   Adds tournament to front of user's tourn list
    // Server sends the user the updated state including new tourn list and tournament
    // Server sends all users in that tournament a chat message noting the user accepted
    // Server sends new roster to all users in that tournament
    socket.on('accept_invite', (data) => {
      console.log('accept_invite', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
          io.to(data.to).emit('user_accepted',
            { id: socket.request.user._id, name: socket.request.user.name });
          socket.emit('accept_invite_success');
          socket.emit('add_tourn', data.entry.tournId);
        }

        socket.emit('accept_invite_fail');
        }

        socket.emit('update_bracket_success');
        socket.emit('update_bracket_fail');
      });

      // Client sends ID of tournament they wish to accept an invite to
      // Server does the following:
      //   Adds user to tournament roster
      //   Adds tournament to front of user's tourn list
      // Server sends the user the updated state including new tourn list and tournament
      // Server sends all users in that tournament a chat message noting the user accepted
      // Server sends new roster to all users in that tournament
      socket.on('accept_invite', (data) => {
        console.log('accept_invite', data);
        if (data.to != null) {
          console.log('sending back');
          io.to(data.to).emit('user_accepted',
            { id: socket.request.user._id, name: socket.request.user.name });
          socket.emit('accept_invite_success');
          socket.emit('add_tourn', data.entry.tournId);
        } else {
          socket.emit('accept_invite_fail');
        }
      });
    }
  });
};
