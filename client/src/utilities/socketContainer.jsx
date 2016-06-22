import io from 'socket.io-client';

let socket;

if (process && process.env) {

  socket = {};

} else {

  console.log('Socket canary');
  socket = io(
    `${location.protocol}//${location.hostname}${location.port === 80 ? '' : `:${location.port}`}`
  );
}

export { socket };
