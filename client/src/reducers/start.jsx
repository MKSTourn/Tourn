//
// Start button reducer
//

function handleToggleStart(state) {
  console.log('Start reducer: handleToggleStart');
  const toggledStartBtn = !state.get('start');
  return state.set('start', toggledStartBtn);
}

function handleStartTourn(state) {
  console.log('Invite reducer: handleSendInvite');
  // User sent start tourn request to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

export default function start(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_START':
      return handleToggleStart(state);
    case 'START_TOURN':
      return handleStartTourn(state, action.start);
    default:
      return state;
  }
}
