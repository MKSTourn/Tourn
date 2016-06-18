import { combineReducers } from 'redux';

import info from './info';
import chat from './chat';
import bracket from './bracket';
import roster from './roster';

const tournament = combineReducers({
  info,
  chat,
  bracket,
  roster,
});

export default tournament;
