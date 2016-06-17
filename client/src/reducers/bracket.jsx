//
// Bracket reducer
//

function handleSubmitAdvance(state, bracket) {
  // TODO: Submit player advancement request to server
  // provide matchIndex, userId of winner
}

function handleUpdateBracket(state, bracket) {
  return state.set('bracket', bracket)
}

export default function bracket(state = INITIAL_STATE, newBracket) {
  switch (action.type) {
    case 'SUBMIT_ADVANCE':
      return handleSubmitAdvance(state.tournament, action.bracket);
    case 'UNDO_ADVANCE':
      // TODO: allow user to undo advance state change
    case 'UPDATE_BRACKET':
      return handleBracketUpdate(state.tournament, action.bracket);
    default:
      return state;
  }
}
