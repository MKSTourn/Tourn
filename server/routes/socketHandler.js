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
      // console.log('Socket attached user object', socket.request.user);
      // console.log('JOINING OWN ROOM', socket.request.user._id.toString());
      users.findById(socket.request.user._id)
        .then((resultUser) => {
          // console.log('Database fresh user object', resultUser);
          if (resultUser.tournamentIds[0]) {
            console.log('connection: joining tournId =', resultUser.tournamentIds[0].tournId);
            socket.join(resultUser.tournamentIds[0].tournId);
          }

          stateGenerator.generateUserState(
            resultUser._id,
            resultUser.tournamentIds[0] ? resultUser.tournamentIds[0].tournId : null
          )
            .then((state) => {
              // console.log('State sent to client:', state);
              socket.emit('set_state', state);
              socket.join(socket.request.user.name,
                (...args) => console.log('Joined self room,', socket.request.user.name, args));
              console.log(socket.rooms);
              // io.to(socket.request.user._id).emit('select_tourn_fail');
            });
        })
        .catch(() => {
          // console.log('Error while searching for user, ', err);
        });

      // Client submits newly created tournament data,
      // Server adds tournament to db,
      // Send that user the updated state with:
      //   User's tournament list updated with new tourn ID,
      //   User's isOrganizer property set to TRUE,
      //   User's tournament object updated with new tourn ID
      socket.on('new_tourn', (data) => {
        // console.log('new_tourn', data);
        tournaments.create(
          socket.request.user._id,
          data.entry.tournName,
          data.entry.tournType,
          data.entry.rules
        )
        .then((result) => {
          socket.emit('new_tourn_success', {
            info: {
              tournId: result._id,
              tournName: result.name,
              tournType: result.type,
              rules: result.rules,
            },
            tournStatus: result.tournStatus,
            tournWinner: result.tournWinner,
            roster: result.roster,
            bracket: {
              bracketSize: result.roster.length,
              matches: result.matches,
            },
          });
          socket.join(result._id.toString());
        })
        .catch((err) => {
          // console.log('Tournament creation error: ', err);
          socket.emit('new_tourn_fail');
        });
      });

      // Client submits ID of tournament they want to view
      // Server retrieves latest state of that tournament from db
      // Server sends back new tournament object
      socket.on('select_tourn', (data) => {
        // console.log('select_tourn', data);
        tournaments.findById(data.entry.tournId)
          .then((result) => {
            const tournResult = stateGenerator.generateTournamentData(result);
            socket.join(result._id.toString(),
                (...args) => console.log('Joined tourn room, ', result._id.toString()));
            if (result) {
              socket.emit('select_tourn_success',
                tournResult);
            } else {
              socket.emit('select_tourn_fail', 'doesnt exist');
            }
          });
      });

      // Client sends ID of alert they want deleted
      // Server updates user's alert list in db with alert removed
      // Server sends back new user data with alert list updated

      socket.on('create_alert', data => {
        // console.log('create_alert', data);
        users.createAlert(
          data.entry.facebookId,
          data.entry.tournId,
          data.entry.tournName,
          false,
          data.entry.message)
        .then((result) => {
          socket.emit('create_alert_success');
          console.log('create_alert: result =', result);
          socket.to(result._id).emit('alert', {
            tournId: data.entry.tournId,
            tournName: data.entry.tournName,
            messsage: data.entry.message,
          }, (...args) => console.log(args));
        })
        .catch((err) => {
          // console.log('create_alert error', err);
          socket.emit('create_alert_fail');
        });
      });

      socket.on('delete_alert', (data) => {
        console.log('delete_alert', data);
        users.deleteAlert(socket.request.user._id, data.entry.alertId)
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
      socket.on('advance_player', (data) => {
        console.log('update_bracket', data);
        tournaments.advancePlayer(data.entry.tournId, data.entry.playerId, data.entry.matchIndex)
        .then((player) => {
          socket.emit('update_bracket_success');
          io.to(data.to).emit('update_bracket',
            {
              tournId: data.entry.tournId,
              winner: {
                playerId: player._id,
                playerName: player.name,
                playerPic: player.picture,
              },
              matchIndex: data.entry.matchIndex,
            });
        })
        .catch(() => {
          socket.emit('update_bracket_fail');
        });
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
        users.acceptInvite(socket.request.user._id, data.entry.alertId)
          .then((result) => {
            console.log('Accepted invite');
            tournaments.addRosterPlayer(result.tournId, socket.request.user._id)
              .then((tourn) => {
                console.log('User result', result);
                console.log('Tourn result', tourn);

                console.log(typeof socket.rooms);

                socket.emit('accept_invite_success', { tournId: result.tournId });

                socket.join(socket.request.user.name);
                socket.join(data.to, () => {
                  io.to(data.to)
                    .emit('set_tourn_state', stateGenerator.generateTournamentData(tourn));
                });
              })
              .catch((err) => {
                console.log('accept_invited tournament update error', err);
                socket.emit('accept_invite_fail');
              });
          })
          .catch((err) => {
            console.log('accept_invited user accept error', err);
            socket.emit('accept_invite_fail');
          });
      });

      socket.on('send_invite', (data) => {
        console.log('send_invite', data);

        tournaments.findById(data.entry.tournId)
          .then((tournament) => {
            users.findByName(data.entry.invitee)
            .then((user) => {
              users.createAlert(
                data.entry.invitee,
                tournament._id,
                tournament.name,
                true,
                `You've been invited to join ${tournament.name}`)
              .then((result) => {
                // console.log('User result', user);
                console.log('send_invite - alert result', result);
                console.log('Sending to,', user.name);
                io.to(user.name).emit('alert', result);
                socket.emit('send_invite_success', user.name);
              })
              .catch((err) => {
                console.log('send_invite_fail', err);
                socket.emit('send_invite_fail');
              });
            });
          });
      });

      socket.on('start_tourn', (data) => {
        // console.log('start_tourn', data);
        // Flip a switch on the tourn, if user is the organized
        tournaments.startTourn(data.entry.tournId)
        .then(() => {
          // console.log('Start tourn success: ', err);

          socket.emit('start_tourn_success');
          console.log('Sending tourn_started to:', data.to);
          io.to(data.to).emit('tourn_started');
        })
        .catch((err) => {
          // console.log('Start tourn error: ', err);
          socket.emit('start_tourn_fail');
        });
      });

      socket.on('submit_chat', (data) => {
        // console.log('submit_chat', data);
        tournaments.addChatMessage(
          data.entry.tournId,
          socket.request.user._id,
          socket.request.user.name,
          socket.request.user.picture,
          data.entry.message,
          data.entry.timeStamp)
        .then((result) => {
          socket.emit('submit_chat_success');
          console.log('Sending udpate_chat to:', data.to);
          io.to(data.to).emit('update_chat', {
            authorId: socket.request.user._id,
            authorName: socket.request.user.name,
            message: data.entry.message,
            timeStamp: data.entry.timeStamp,
          });
        })
        .catch((err) => {
          // console.log('Submit chat error', err);
          console.log('submit chat fail: err =', err);
          socket.emit('submit_chat_fail');
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
//   tournId: null,  // id of tournament that message is addressed to
//   message: '',    // user message string
//   timeStamp: '',  // time message was generated
// }
// Server adds new message to the tournament's chat history
// Server sends new chat history to all players in tourn
