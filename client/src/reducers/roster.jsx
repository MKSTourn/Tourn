//
// Roster Reducer
//

function handleUpdateRoster(state, newRoster) {
  console.log('Roster reducer: handleUpdateRoster');
  return state.set('roster', newRoster);
}

export default function roster(state = {}, action) {
  console.log('Roster Reducer State', state);
  switch (action.type) {
    case 'UPDATE_ROSTER':
      return handleUpdateRoster(state, action.newRoster);
    default:
      return state;
  }
}
