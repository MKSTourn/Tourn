//
// Start button reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleToggleStart(state, start) {
  return state.set('start', start);
  // TODO: freeze future UI
  // TODO: show spinner
}

export default function start(state = fromJS(INITIAL_STATE).getIn(['tournament', 'start']), action) {
  switch (action.type) {
    case 'TOGGLE_SHOW_START':
      return handleToggleStart(state, action.start);
    default:
      return state;
  }
}
