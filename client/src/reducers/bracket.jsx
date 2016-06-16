// import { List, Map } from 'immutable';

// function setState(state, newState) {
//   return state.merge(newState);
// }

// function nextRound(state) {
//   const entries = state.get('entries')
//                        .concat(getWinners(state.get('vote')));
//   if (entries.size === 1) {
//     return state.remove('vote')
//                 .remove('entries')
//                 .set('winner', entries.first());
//   } else {
//     return state.merge({
//       vote: Map({pair: entries.take(2)}),
//       entries: entries.skip(2)
//     });
//   }
// }

const INITIAL_STATE = {};

// Given a match index, return the next match index
// the player should be placed in
function getNextMatch(matchIndex, bracketSize = 8) {

  if (matchIndex < 2) {
    return 4;
  } else if (matchIndex < 4) {
    return 5;
  } else if (matchIndex < 6) {
    return 6;
  }

  return -1;
}

function advancePlayer(state, action) {
  //
  // Generate copy of current state
  // Regenerate match list with winner placed in next round
  //
  const nextState = Object.assign(state, {});
  const newBracket = Object.assign(nextState.tourn.bracket, {});
  const nextMatch = getNextMatch(action.matchIndex, action.bracketSize); // TODO don't hardcode this

  newBracket.matches[nextMatch].pair.push(action.winner);
  nextState.tourn.bracket = newBracket;

  return nextState;
}

export default function reducer(state = INITIAL_STATE) {
  switch (action.type) {
    case 'ADVANCE':
      return advancePlayer(state, action);
    case 'UNDO_ADVANCE':
      // return undoAdvancePlayer(state);
    default:
      return state;
  }
}
