//
// Roster Reducer
//

function handleUpdateRoster(state, newRoster) {
  console.log('Roster reducer: handleUpdateRoster');
  return state.set('roster', newRoster);
}

export default function roster(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ROSTER':
      return handleUpdateRoster(state, action.newRoster);
    default:
      return state;
  }
}
