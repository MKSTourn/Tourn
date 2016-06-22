//
// Remote action middleware
//
// Middleware functions to handle server socket IO events
//

export default socket => store => next => action => {
  // Make a request for a user with a given ID

  console.log('Middleware!', socket, store, next, action);

  const meta = action.meta;

  if (meta) {
    socket.emit(meta.event, { to: meta.to, entry: meta.entry });
  }

  return next(action);
};
