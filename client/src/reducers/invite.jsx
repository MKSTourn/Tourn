//
// Invite button reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleToggleInvite(state, invite) {
  return state.set('Invite', invite);
  // TODO: freeze future UI
  // TODO: show spinner
}

export default function Invite(state = fromJS(INITIAL_STATE).getIn(['tournament', 'invite']), action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_INVITE':
      return handleToggleInvite(state, action.invite);
    default:
      return state;
  }
}
