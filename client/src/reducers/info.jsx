//
// Tournament info reducer
//

function handleUpdateId(state, tournId) {
  return state.set('tournId', tournId);
}

function handleUpdateType(state, tournType) {
  return state.set('tournType', tournType);
}

function handleUpdateName(state, tournName) {
  return state.set('tournName', tournName);
}

function handleUpdateRules(state, rules) {
  return state.set('rules', rules);
}

export default function info(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ID':
      return handleUpdateId(state.tournInfo, action.tournId);
    case 'UPDATE_TYPE':
      return handleUpdateType(state.tournInfo, action.tournType);
    case 'UPDATE_NAME':
      return handleUpdateName(state.tournInfo, action.tournName);
    case 'UPDATE_RULES':
      return handleUpdateRules(state.tournInfo, action.rules);
    default:
      return state;
  }
}
