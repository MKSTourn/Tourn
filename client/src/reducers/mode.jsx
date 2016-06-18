//
// Mode reducer
//

function handleChangeMode(state, mode) {
  return state.set('mode', mode);
  // TODO: freeze future UI
  // TODO: show spinner
}

export default function mode(state, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return handleChangeMode(state, action.mode);
    default:
      return state;
  }
}
