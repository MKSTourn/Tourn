//
// Start button reducer
//

function handleToggleStart(state) {
  console.log('Start reducer: handleToggleStart');
  const toggledStartBtn = !state.get('start');
  return state.set('start', toggledStartBtn);
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
      return handleToggleStart(state.get(['tournament']));
    case 'START_TOURN':
      return handleStartTourn(state.get(['tournament']));
    default:
      return state;
  }
}
