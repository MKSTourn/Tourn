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

    socket.on('action', (/* data */) => {
      // Handle data somehow
      if (socket.request.user) {
        console.log('Test');
        // Do something only if authenticated
      }
    });
  });
};
