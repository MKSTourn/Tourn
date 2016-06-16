import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rules from './rules';
import messages from './messages';
import headerReducer from './header_reducer';

const rootReducer = combineReducers({ rules, messages, routing: routerReducer });

export default rootReducer;
