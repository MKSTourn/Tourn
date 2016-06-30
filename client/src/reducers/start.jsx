//
// Start button reducer
//

function handleSetStart(state, started) {
  console.log('handleSetStart: new start state =', started);
  return started;
}

function handleStartTourn(state) {
  console.log('Start reducer: handleStartTourn');
  // User sent start tourn request to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

export default function start(state = {}, action) {
  // console.log('Start Reducer State', state.toJS());
  switch (action.type) {
    case 'SET_START':
      return handleSetStart(state, action.start);
    case 'START_TOURN':
      return handleStartTourn(state);
    default:
      return state;
  }
}
