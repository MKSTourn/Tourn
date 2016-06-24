//
// Chat reducer
//

import { fromJS } from 'immutable';

function handleSubmitChat(state, chat) {
  return state.set('chat', chat);
}

function handleChatUpdate(state, chatHist) {
  return state.set('chat', chat);
}

export default function chat(state = {}, action) {
  switch (action.type) {
    case 'SUBMIT_CHAT':
      return handleSubmitChat(state.tournament, action.chat);
    case 'UPDATE_CHAT':
      return handleChatUpdate(state.tournament, action.chatHist);
    default:
      return state;
  }
}

