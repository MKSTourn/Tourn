require('babel-register');
const INITIAL_STATE = require('../../data/state.jsx');
const stateGenerator = require('../stateGenerator.js');
const tournaments = require('../models/tournaments.js');
const users = require('../models/users.js');

module.exports.socket = function socketAttachment(io) {
  io.on('connection', (socket) => {
    if (socket.request && socket.request.user) {
    // No need for this event.
    // Client automatically will receive logged state
    // when server detects user is logged in
    // Server will push down LoggedIn initial state when this
    // happens
      console.log(socket.request.user);
      socket.join(socket.request.user._id);

      stateGenerator.generateUserState(socket.request.user._id)
        .then((state) => {
          console.log(state);
          socket.emit('set_state', state);
        });


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
        socket.join(data.entry.tournId);
        tournaments.findById(data.entry.tournId)
          .then((result) => {
            console.log('tourn result', result)
            if (result) {
              socket.emit('select_tourn_success', result);
            } else {
              socket.emit('select_tourn_fail', 'doesnt exist');
            }
          });
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

      socket.on('send_invite', (data) => {
        console.log('send_invite', data);

        io.to(data.userid).emit('update_alert',
          {
            tournId: data.tournId,
            message: 'Invited to a tournament!',
            isInvite: true,
          });
      });
    }
  });
};

// send_invite
// Client sends a tournId and a user name to send an invite to
// Server matches name against the user db.
// If there is a match, add a new alert to the invited user's
// alerts list.
// Server sends back a new user state to the invited user with
// updated alert list.
//

// start_tourn
// Client sends the tournId of tournament to begin
// Server updates tournament state in DB
// Server sends back success message to all players in tourn

// submit_chat
// Client sends the new chat message in the form of:
// {
//   authorId: null, // id of user who wrote message
//   message: '',    // user message string
//   timeStamp: '',  // time message was generated
// }
// Server adds new message to the tournament's chat history
// Server sends new chat history to all players in tourn
