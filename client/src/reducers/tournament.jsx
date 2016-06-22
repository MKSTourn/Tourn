import { combineReducers } from 'redux-immutable';

import info from './info.jsx';
import chat from './chat.jsx';
import bracket from './bracket.jsx';
import roster from './roster.jsx';
import start from './start.jsx';
import invite from './invite.jsx';

const tournament = combineReducers({
  info,
  chat,
  bracket,
  roster,
  start,
  invite,
});

export default tournament;
