import io from 'socket.io-client';

let socket;

console.log('Proc', process, process.env)
if (process.title && process.title != 'browser') {

  socket = {};

} else {

  console.log('Socket canary');
  socket = io(
    `${location.protocol}//${location.hostname}${location.port === 80 ? '' : `:${location.port}`}`
  );
}

export { socket };