import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rules from './rules';
import comments from './comments';

const rootReducer = combineReducers({rules, comments, routing: routerReducer });

export default rootReducer;
