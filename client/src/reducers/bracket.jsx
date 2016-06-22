//
// Bracket reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleSubmitAdvance(state, bracket) {
  // TODO: Submit player advancement request to server
  // provide matchIndex, userId of winner
}

function handleUpdateBracket(state, bracket) {
  return state.set('bracket', bracket);
}

export default function bracket(state = {}, action) {
  switch (action.type) {
    case 'SUBMIT_ADVANCE':
      return handleSubmitAdvance(state, action.bracket);
    case 'UPDATE_BRACKET':
      return handleUpdateBracket(state, action.bracket);
    default:
      return state;
  }
}
