//
// Bracket reducer
//

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

  // console.log('handleUpdateBracket: tournId, matchIndex, winner:', tournId, matchIndex, winner);
  console.log('handleUpdateBracket: nextMatch:', nextMatch);

  if (!nextMatch) {
    // Invalid match index. Do not change state!
    console.log('handleUpdateBracket: invalid match index!');
    return state;
  }

  newBracket.matches[matchIndex].winner = winner;
  newBracket.matches[matchIndex].status = 'Concluded';

  if (nextMatch === -1) {
    // Final match has concluded
    console.log('handleUpdateBracket: tournament has concluded!');
    newBracket.tournWinner = winner;
    newBracket.tournStatus = 'Concluded';
    return fromJS(newBracket);
  }

  if (!newBracket.matches[nextMatch].player1.userId) {
    // Fill player1 slot of next match
    console.log('handleUpdateBracket: filling player1 slot of next match!');
    newBracket.matches[nextMatch].player1 = winner;
  } else if (!newBracket.matches[nextMatch].player2.userId) {
    // Fill player2 slot of next match
    console.log('handleUpdateBracket: filling player2 slot of next match!');
    newBracket.matches[nextMatch].player2 = winner;
    newBracket.matches[nextMatch].status = 'In Progress';
  } else {
    // Should never happen
    console.log('handleUpdateBracket: error - match already full!');
  }

  return fromJS(newBracket);
}

export default function bracket(state = {}, action) {
  switch (action.type) {
    // case 'SUBMIT_ADVANCE':
    //   return handleSubmitAdvance(state, action.bracket);
    case 'UPDATE_BRACKET':
      return handleUpdateBracket(state, action.tournId, action.matchIndex, action.winner);
    default:
      return state;
  }
}
