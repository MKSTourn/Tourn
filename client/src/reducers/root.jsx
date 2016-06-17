import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rules from './rules';
import messages from './messages';
import header from './header_reducer';
import bracket from './bracket';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
});

export default rootReducer;
