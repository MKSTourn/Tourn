import io from 'socket.io-client';

let socket;
const connectionString = `${location.protocol}//${location.hostname}${location.port === 80 ?
                         '' : `:${location.port}`}`;
if (process.title && process.title != 'browser') {
  socket = {};
} else {
  console.log('Socket canary');
  socket = io.connect(connectionString, {
    reconnectionAttempts: 3,
  });
}

/**
 *  Configure socket connection settings here.
**/
socket.on('connect', () => {
  console.log('Client socket connected');
});

socket.on('connect_error', error => {
  console.log('Client socket connection error:', error);
});

socket.on('connect_timeout', data => {
  console.log('Socket connection attempt timed out:', data);
});

export { socket };
