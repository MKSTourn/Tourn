//
// Mode reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleChangeMode(state, mode) {
  console.log('Mode reducer: handleChangeMode');
  return state;
}

export default function mode(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return handleChangeMode(state, action.mode);
    default:
      return state;
  }
}
