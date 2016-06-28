//
// Tournament info reducer
//

function handleUpdateId(state, tournId) {
  console.log('handleUpdateId: tournId =', tournId);
  return state.set('tournId', tournId);
}

function handleUpdateType(state, tournType) {
  console.log('handleUpdateType: tournType =', tournType);
  return state.set('tournType', tournType);
}

function handleUpdateName(state, tournName) {
  console.log('handleUpdateName: tournName =', tournName);
  return state.set('tournName', tournName);
}

function handleUpdateRules(state, rules) {
  console.log('handleUpdateRules: rules =', rules);
  return state.set('rules', rules);
}

export default function info(state = {}, action) {
  // console.log('Info Reducer State', state.toJS());
  switch (action.type) {
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
