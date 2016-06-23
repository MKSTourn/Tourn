//
// Roster Reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleToggleInvite(state, showInviteBtn) {
  return state.set('showInviteBtn', showInviteBtn);
}

export default function roster(state = {}, action) {
  switch (action.type) {
    case 'SHOW_INVITE':
      return handleToggleInvite(state.tournament, action.showInviteBtn);
    default:
      return state;
  }
}
