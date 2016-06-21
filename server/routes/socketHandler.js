require('babel-register');
const INITIAL_STATE = require('../../data/state.jsx');

module.exports.socket = function socketAttachment(io) {
  io.on('connection', (socket) => {
    socket.emit('connected');

    socket.on('get_initial_state', (/* data */) => {
      if (socket.request.user) {
        console.log('Test');
        console.log(socket.request.user);

        socket.emit('set_state', INITIAL_STATE);
      }

      console.log('Logs regardless');
    });

    socket.on('new_tourn', (data) => {
      console.log('new_tourn', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
        }

        socket.emit('new_tourn_success');
        socket.emit('new_tourn_fail');
      }
    });

    socket.on('select_tourn', (data) => {
      console.log('select_tourn', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
        }

        socket.emit('select_tourn_success');
        socket.emit('select_tourn_fail');
      }
    });

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

    socket.on('accept_invite', (data) => {
      console.log('accept_invite', data);
      if (socket.request.user) {
        // console.log('authed user');

        if (data.to != null) {
          console.log('sending back');
        }

        socket.emit('accept_invite_success');
        socket.emit('accept_invite_fail');
      }
    });
  });
};
