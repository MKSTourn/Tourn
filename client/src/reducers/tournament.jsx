import { combineReducers } from 'redux';

import rules from './tournInfo';
import chat from './chat';
import bracket from './bracket';
import roster from './roster';
import rules from './rules';

export default const tournamentReducer = combineReducers({
  tournInfo,
  chat,
  bracket,
  roster,
  rules
});
