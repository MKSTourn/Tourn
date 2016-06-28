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
  console.log('Info reducer: handleUpdateName');
  console.log('handleUpdateName: tournName =', tournName);
  return state.set('tournName', tournName);
}

function handleUpdateRules(state, rules) {
  return state.set('rules', rules);
}

export default function info(state = {}, action) {
  console.log('Network Reducer State', state);
  switch (action.Info) {
    case 'UPDATE_ID':
      return handleUpdateId(state, action.tournId);
    case 'UPDATE_TYPE':
      return handleUpdateType(state, action.tournType);
    case 'UPDATE_NAME':
      return handleUpdateName(state, action.tournName);
    case 'UPDATE_RULES':
      return handleUpdateRules(state, action.rules);
    default:
      return state;
  }
}
