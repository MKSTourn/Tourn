//
// Mode reducer
//

function handleChangeMode(state, newMode) {
  return state.set('mode', newMode);
  // TODO: freeze future UI
  // TODO: show spinner
}

export default function tournInfo(state, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return handleChangeMode(state, action.mode);
    default:
      return state;
  }
}
