//
// Chat reducer
//

function handleMessageSubmit(state, chatHistory) {
  return state.set('chatHistory', chatHistory);
}

export default function tournInfo(state, action) {
  switch (action.type) {
    case 'UPDATE_CHAT':
      return handleChatUpdate(state.tournament, action.data);
    default:
      return state;
  }
}
