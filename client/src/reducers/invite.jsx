//
// Invite button reducer
//

function handleToggleInvite(state) {
  console.log('Invite reducer: handleToggleInvite');
  console.log('handleToggleInvite: toggled state =', !state);
  return !state;
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
      return handleToggleInvite(state);
    case 'SEND_INVITE':
      return handleSendInvite(state);
    default:
      return state;
  }
}
