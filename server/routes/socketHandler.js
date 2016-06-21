module.exports.socket = function socketAttachment(io) {
  io.on('connection', (socket) => {
    socket.emit('connected');

    socket.on('action', (/* data */) => {
      // Handle data somehow
      if (socket.request.user) {
        // Do something only if authenticated
      }
    });
  });
};
