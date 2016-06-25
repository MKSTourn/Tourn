//
// Bracket reducer
//

import { fromJS } from 'immutable';
import { getNextMatch } from '../utilities/bracket_helpers.jsx';

function handleUpdateBracket(state, newBracket) {
  // TODO: Submit player advancement request to server
  // provide matchIndex, userId of winner
  console.log('handleUpdateBracket');
  return state.set('bracket', newBracket);
}

function handleSubmitAdvance(state, tournId, matchIndex, winner) {
  const newBracket = state.toJS();

  const nextMatch = getNextMatch(matchIndex, newBracket.bracketSize);

  console.log('handleSubmitAdvance: properties', tournId, matchIndex, winner);

  // console.log('handleSubmitAdvance: tournId, matchIndex, winner:', tournId, matchIndex, winner);
  console.log('handleSubmitAdvance: nextMatch:', nextMatch);

  if (!nextMatch) {
    // Invalid match index. Do not change state!
    console.log('handleSubmitAdvance: invalid match index!');
    return state;
  }

  newBracket.matches[matchIndex].winner = winner;
  newBracket.matches[matchIndex].status = 'Concluded';

  if (nextMatch === -1) {
    // Final match has concluded
    console.log('handleSubmitAdvance: tournament has concluded!');
    newBracket.tournWinner = winner;
    newBracket.tournStatus = 'Concluded';
    return fromJS(newBracket);
  }

  if (!newBracket.matches[nextMatch].player1.userId) {
    // Fill player1 slot of next match
    console.log('handleSubmitAdvance: filling player1 slot of next match!');
    newBracket.matches[nextMatch].player1 = winner;
  } else if (!newBracket.matches[nextMatch].player2.userId) {
    // Fill player2 slot of next match
    console.log('handleSubmitAdvance: filling player2 slot of next match!');
    newBracket.matches[nextMatch].player2 = winner;
    newBracket.matches[nextMatch].status = 'In Progress';
  } else {
    // Should never happen
    console.log('handleSubmitAdvance: error - match already full!');
  }

  return fromJS(newBracket);
}

function handleUpdateSize(state, bracketSize) {
  return state.set('rules', bracketSize);
}

export default function bracket(state = {}, action) {
  switch (action.type) {
    case 'SUBMIT_ADVANCE':
      return handleSubmitAdvance(state, action.bracket);
    case 'UPDATE_BRACKET':
      return handleUpdateBracket(state, action.tournId, action.matchIndex, action.winner);
    case 'UPDATE_BRACKET_SIZE':
      return handleUpdateSize(state.tournInfo, action.bracketSize);
    default:
      return state;
  }
}
