//
// Start button reducer
//

function handleToggleStart(state) {
  console.log('handleToggleStart: toggled state =', !state);
  return !state;
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
    case 'TOGGLE_START':
      return handleToggleStart(state);
    case 'START_TOURN':
      return handleStartTourn(state);
    default:
      return state;
  }
}
