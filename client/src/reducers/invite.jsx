//
// Invite button reducer
//

function handleToggleInvite(state) {
  console.log('Invite reducer: handleToggleInvite');
  const toggledInviteBtn = !state.get('invite');
  return state.set('invite', toggledInviteBtn);
}

function handleSendInvite(state) {
  console.log('Invite reducer: handleSendInvite');
  // User's player invite has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

export default function invite(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_INVITE':
      return handleToggleInvite(state.get('tournament'));
    case 'SEND_INVITE':
      return handleSendInvite(state.get('tournament'));
    default:
      return state;
  }
}
