//
// Invite button reducer
//

function handleToggleInvite(state) {
  console.log('handleToggleInvite: toggled state =', !state);
  return !state;
}

function handleSendInvite(state) {
  console.log('handleSendInvite');
  // User's player invite has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

export default function invite(state = {}, action) {
  // console.log('Invite Reducer State', state.toJS());
  switch (action.type) {
    case 'TOGGLE_INVITE':
      return handleToggleInvite(state);
    case 'SEND_INVITE':
      return handleSendInvite(state);
    default:
      return state;
  }
}
