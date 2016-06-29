//
// Invite button reducer
//

function handleAllowInvites(state, allowInvites) {
  console.log('handleAllowInvites: new invite state =', allowInvites);
  return allowInvites;
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
    case 'ALLOW_INVITES':
      return handleAllowInvites(state, action.invite);
    case 'SEND_INVITE':
      return handleSendInvite(state);
    default:
      return state;
  }
}
