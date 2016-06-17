//
// Roster Reducer
//

function toggleInviteBtn(state, showInviteBtn) {
  return state.set('showInviteBtn', showInviteBtn);
}

export default function roster(state, action) {
  switch (action.type) {
    case 'TEMPLATE':
      return handleCreate(state.tournament, action.mode);
    default:
      return state;
  }
}
