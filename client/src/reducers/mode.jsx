//
// Mode reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleChangeMode(state, mode) {
  console.log('handleChangeMode');
  return state;
}

export default function mode(state = fromJS(INITIAL_STATE).get('mode'), action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return handleChangeMode(state, action.mode);
    default:
      return state;
  }
}
