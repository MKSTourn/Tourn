import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rules from './rules';
import messages from './messages';

const rootReducer = combineReducers({ rules, messages, routing: routerReducer });

export default rootReducer;
