//
// Mode reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleSetState(state, newState) {
  console.log('handleSetState');
  return state.merge(newState);
}

function handleSetUserState(state, newUserState) {
  console.log('handleSetUserState');
  return state.merge(newUserState);
}

function handleSetTournState(state, newTournState) {
  console.log('handleSetTournState');
  console.log('new tourn state =', newTournState);
  // return state.merge(newTournState);
  return state.set('tournament', fromJS(newTournState));
}

export default function network(state = fromJS(INITIAL_STATE), action) {
  switch (action.type) {
    case 'SET_STATE':
      console.log(action);
      return handleSetState(state, action.newState);
    case 'SET_USER_STATE':
      return handleSetUserState(state.getIn(['header', 'userData'], action.newUserState));
    case 'SET_TOURN_STATE':
      console.log(action);
      return handleSetTournState(state, action.newTournState);
    default:
      return state;
  }
}
