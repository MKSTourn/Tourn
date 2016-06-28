//
// Mode reducer
//

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
  const nextState = state.setIn(['header', 'userData'],
    state.getIn(['header', 'userData']).mergeDeep(fromJS(newState)));
  console.log('Next state =', nextState.toJS());
  return nextState;
}

function handleSetTournState(state, newState) {
  console.log('handleSetTournState');
  console.log('Initial state =', state.toJS());
  const nextState = state.set('tournament', state.get('tournament').mergeDeep(fromJS(newState)));
  console.log('Next state =', nextState.toJS());
  return nextState;
}

export default function network(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE':
      console.log(action);
      return handleSetState(state, action.state);
    case 'SET_USER_STATE':
      return handleSetUserState(state, action.state);
    case 'SET_TOURN_STATE':
      console.log(action);
      return handleSetTournState(state, action.state);
    default:
      return state;
  }
}
