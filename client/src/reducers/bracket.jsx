//
// Bracket reducer
//

import { fromJS } from 'immutable';
import { getNextMatch } from '../utilities/bracket_helpers.jsx';

function handleSubmitAdvance(state) {
  // TODO: Submit player advancement request to server
  // provide matchIndex, userId of winner
  console.log('handleSubmitAdvance: initial =', state);
  return state;
}

function handleUpdateStatus(state, status) {
  // TODO: Submit player advancement request to server
  // provide matchIndex, userId of winner
  console.log('handleUpdateStatus: new status =', status);
  return state.set('tournStatus', status);
}

function handleUpdateBracket(state, tournId, matchIndex, winner) {
  const newBracket = state.toJS();
  // console.log('handleSubmitAdvance: newBracket before =', newBracket);
  // console.log('handleSubmitAdvance: matches =', newBracket.matches);
  // console.log('handleSubmitAdvance: matchIndex =', matchIndex);

  const nextMatch = getNextMatch(matchIndex, newBracket.bracketSize);

  console.log('handleSubmitAdvance: properties', tournId, matchIndex, winner);

  // console.log('handleSubmitAdvance: tournId, matchIndex, winner:', tournId, matchIndex, winner);
  console.log('handleSubmitAdvance: nextMatch:', nextMatch);

  if (!nextMatch) {
    // Invalid match index. Do not change state!
    console.log('handleSubmitAdvance: invalid match index!');
    return state;
  }

  // console.log('handleSubmitAdvance: matches before fail =', newBracket.matches);
  // console.log('handleSubmitAdvance: matchIndex before fail =', matchIndex);
  // console.log('handleSubmitAdvance: match at matchIndex =', newBracket.matches[matchIndex]);
  newBracket.matches[matchIndex].winner = winner;
  newBracket.matches[matchIndex].status = 'Concluded';

  if (nextMatch === -1) {
    // Final match has concluded
    console.log('handleSubmitAdvance: tournament has concluded!');
    newBracket.tournWinner = winner;
    newBracket.tournStatus = 'Concluded';
    return fromJS(newBracket);
  }

  if (!newBracket.matches[nextMatch].playerA) {
    // Fill player1 slot of next match
    console.log('handleSubmitAdvance: filling player1 slot of next match!');
    newBracket.matches[nextMatch].playerA = winner;
  } else if (!newBracket.matches[nextMatch].playerB) {
    // Fill player2 slot of next match
    console.log('handleSubmitAdvance: filling player2 slot of next match!');
    newBracket.matches[nextMatch].playerB = winner;
    newBracket.matches[nextMatch].status = 'In Progress';
  } else {
    // Should never happen
    console.log('handleSubmitAdvance: error - match already full!');
  }

  return fromJS(newBracket);
}

function handleUpdateSize(state, bracketSize) {
  return state.set('bracketSize', bracketSize);
}

export default function bracket(state = {}, action) {
  // console.log('Bracket Reducer State', state.toJS());
  switch (action.type) {
    case 'SUBMIT_ADVANCE':
      return handleSubmitAdvance(state);
    // case 'ADVANCE_PLAYER':
    //   return handleUpdateBracket(state, action.tournId, action.matchIndex, action.winner);
    case 'UPDATE_BRACKET':
      return handleUpdateBracket(state, action.tournId, action.matchIndex, action.winner);
    case 'UPDATE_TOURN_STATUS':
      return handleUpdateStatus(state, action.status);
    case 'UPDATE_BRACKET_SIZE':
      return handleUpdateSize(state.tournInfo, action.bracketSize);
    default:
      return state;
  }
}
