import io from 'socket.io-client';

console.log('Socket canary');
const socket = io(
  `${location.protocol}//${location.hostname}${location.port === 80 ? '' : `:${location.port}`}`
);

export { socket };
