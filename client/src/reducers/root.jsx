//
// Root app reducer
//

import { combineReducers } from 'redux';
import header from './header';
import tournament from './tournament';
import mode from './mode';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
});

export default rootReducer;
