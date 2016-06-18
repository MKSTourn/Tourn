//
// Roster Reducer
//

function handleToggleInvite(state, showInviteBtn) {
  return state.set('showInviteBtn', showInviteBtn);
}

export default function roster(state, action) {
  switch (action.type) {
    case 'SHOW_INVITE':
      return handleToggleInvite(state.tournament, action.showInviteBtn);
    default:
      return state;
  }
}
