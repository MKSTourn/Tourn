//
// Root app reducer
//

import { combineReducers } from 'redux-immutable';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
});

export default rootReducer;
