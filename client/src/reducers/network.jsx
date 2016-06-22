//
// Mode reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleSetState(state, newState) {
  console.log('handleSetState');
  return state.merge(newState);
}

function handleSetTournState(state, newTournState) {
  console.log('handleSetTournState');
  return state.merge(newTournState);
}

export default function mode(state = fromJS(INITIAL_STATE), action) {
  switch (action.type) {
    case 'SET_STATE':
      return handleSetState(state, action.newState);
    case 'SET_TOURN_STATE':
      return handleSetTournState(state.get('tournament'), action.newTournState);
    default:
      return state;
  }
}
