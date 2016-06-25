//
// Chat reducer
//

function handleSubmitChat(state) {
  // User's new chat message has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

function handleChatUpdate(state, newChat) {
  return state.set('chat', newChat);
}

export default function chat(state = {}, action) {
  switch (action.type) {
    case 'SUBMIT_CHAT':
      return handleSubmitChat(state);
    case 'UPDATE_CHAT':
      return handleChatUpdate(state, action.newChat);
    default:
      return state;
  }
}

