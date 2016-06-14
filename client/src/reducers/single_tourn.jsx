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

//
//

function advancePlayer(state, action) {
  //
  // Generate copy of current state
  // Regenerate match list with winner placed in next round
  //
  let nextState = Object.assign(state, {});
  let newBracket = Object.assign(nextState.tourn.bracket, {});

  if (action.matchIndex === )




}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADVANCE':
    return advancePlayer(state, action);
  case 'UNDO_ADVANCE':
    return undoAdvancePlayer(state);
  default:
    return state;
  }
}
