require('babel-register');
const INITIAL_STATE = require('../../data/state.jsx');

module.exports.socket = function socketAttachment(io) {
  io.on('connection', (socket) => {
    socket.emit('connected');

    socket.on('request-state', (/* data */) => {
      if (socket.request.user) {
        console.log('Test');
        console.log(socket.request.user);

        socket.emit('received-state', INITIAL_STATE);
      }

      console.log('Logs regardless');
    });

    socket.on('new_tourn', (data) => {
      console.log('New Tourn Data:', data);
      if (socket.request.user) {
        // Process the new tournament in some way.
        socket.emit('new_tourn_status', { status: 'success' });
      }
    });
  });
};
