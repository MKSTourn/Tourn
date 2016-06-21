//
// Chat reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleChatUpdate(state, chat) {
  return state.set('chat', chat);
}

export default function chat(state = fromJS(INITIAL_STATE).getIn(['tournament', 'chat']), action) {
  switch (action.type) {
    case 'UPDATE_CHAT':
      return handleChatUpdate(state.tournament, action.chat);
    default:
      return state;
  }
}
