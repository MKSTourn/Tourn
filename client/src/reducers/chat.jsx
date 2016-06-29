//
// Chat reducer
//
import { fromJS } from 'immutable';

function handleSubmitChat(state) {
  // User's new chat message has been submitted to server.
  console.log('Chat reducer: handleSubmitChat');
  return state.set('message', '');
}

function handleMessageUpdate(state, message) {
  console.log('Chat reducer: handleMessageUpdate');
  console.log('Chat reducer: message =', message);
  return state.set('message', message);
}

function handleChatUpdate(state, message) {
  console.log('Chat reducer: handleChatUpdate', message);
  const newChatHist = state.get('history').toJS();
  newChatHist.push(message);
  return state.set('history', fromJS(newChatHist));
}

export default function chat(state = {}, action) {
  // console.log('Chat Reducer State', state.toJS());
  switch (action.type) {
    case 'SUBMIT_CHAT':
      return handleSubmitChat(state);
    case 'UPDATE_MESSAGE':
      return handleMessageUpdate(state, action.message);
    case 'UPDATE_CHAT':
      return handleChatUpdate(state, action.newChat);
    default:
      return state;
  }
}

