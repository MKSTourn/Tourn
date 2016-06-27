//
// Mode reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleSetState(state, newState) {
  console.log('handleSetState');
  console.log('Initial state =', state.toJS());
  const nextState = state.mergeDeep(fromJS(newState));
  console.log('Next state =', nextState.toJS());
  return nextState;
}

function handleSetUserState(state, newState) {
  console.log('handleSetUserState');
  console.log('Initial state =', state.toJS());
  const nextState = state.mergeDeep(fromJS(newTournState));
  console.log('Next state =', nextState.toJS());
  return nextState;
}

function handleSetTournState(state, newState) {
  console.log('handleSetTournState');
  console.log('Initial state =', state.toJS());
  const nextState = state.mergeDeep(fromJS(newState));
  console.log('Next state =', nextState.toJS());
  return nextState;
}

export default function network(state = fromJS(INITIAL_STATE), action) {
  switch (action.type) {
    case 'SET_STATE':
      console.log(action);
      return handleSetState(state, action.state);
    case 'SET_USER_STATE':
      return handleSetUserState(state.getIn(['header', 'userData'], action.state));
    case 'SET_TOURN_STATE':
      console.log(action);
      return handleSetTournState(state.get('tournament'), action.state);
    default:
      return state;
  }
}
