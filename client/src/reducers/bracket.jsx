//
// Bracket reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';
import { getNextMatch } from '../utilities/bracket_helpers.jsx';

// function handleSubmitAdvance(state, bracket) {
//   // TODO: Submit player advancement request to server
//   // provide matchIndex, userId of winner
//   return state;
// }

function handleUpdateBracket(state, tournId, matchIndex, winner) {
  const newBracket = state.toJS();
  const nextMatch = getNextMatch(matchIndex, newBracket.bracketSize);

  if (!nextMatch) {
    // Invalid match index. Do not change state!
    return state;
  }

  newBracket.matches[matchIndex].winner = winner;
  newBracket.matches[matchIndex].status = 'Concluded';

  if (nextMatch === -1) {
    // Final match has concluded
    newBracket.tournWinner = winner;
    newBracket.tournStates = 'Concluded';
    return state.set('bracket', fromJS(newBracket));
  }

export default function bracket(state = fromJS(INITIAL_STATE).getIn(['tournament', 'bracket']), action) {
    // Fill player1 slot of next match
    newBracket.matches[nextMatch].player1 = winner;
  } else if (!newBracket.matches[nextMatch].player2) {
    // Fill player2 slot of next match
    newBracket.matches[nextMatch].player2 = winner;
  } else {
    // should never happen
    console.log('handleUpdateBracket: error - match already full!');
  }

  return state.set('bracket', fromJS(newBracket));
}

export default function bracket(state = fromJS(INITIAL_STATE).getIn(['tournament', 'bracket']),
                                action) {
  switch (action.type) {
    // case 'SUBMIT_ADVANCE':
    //   return handleSubmitAdvance(state, action.bracket);
    case 'UPDATE_BRACKET':
      return handleUpdateBracket(state, action.bracket);
    default:
      return state;
  }
}
