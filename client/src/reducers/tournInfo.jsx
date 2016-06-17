//
// Tournament info reducer
//

function handleUpdateId(state, newMode) {
  return state.set('tournId', newMode);
}
function handleUpdateType(state, newMode) {
  return state.set('tournType', newMode);
}
function handleUpdateName(state, newMode) {
  return state.set('tournName', newMode);
}
function handleUpdateRules(state, newMode) {
  return state.set('rules', newMode);
}

export default function tournInfo(state, action) {
  switch (action.type) {
    case 'UPDATE_ID':
      return handleUpdateId(state.tournInfo, action);
    case 'UPDATE_TYPE':
      return handleUpdateType(state.tournInfo, action);
    case 'UPDATE_NAME':
      return handleUpdateName(state.tournInfo, action);
    case 'UPDATE_RULES':
      return handleUpdateRules(state.tournInfo, action);
    default:
      return state;
  }
}
