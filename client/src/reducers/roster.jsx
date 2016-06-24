//
// Roster Reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleToggleInvite(state) {
  console.log('Roster reducer: handleToggleInvite');
  const toggledInviteBtn = !state.get('invite');
  return state.set('showTournList', toggledInviteBtn);
}

function handleSendInvite(state) {
  console.log('Roster reducer: handleSendInvite');
  // User's player invite has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

function handleUpdateRoster(state, newRoster) {
  console.log('Roster reducer: handleUpdateRoster');
  return state.set('roster', newRoster);
}

export default function roster(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_INVITE':
      return handleToggleInvite(state);
    case 'SEND_INVITE':
      return handleSendInvite(state);
    case 'UPDATE_ROSTER':
      return handleUpdateRoster(state, action.newRoster);
    default:
      return state;
  }
}
