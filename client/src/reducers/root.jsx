//
// Root app reducer
//

import { combineReducers } from 'redux-immutable';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';
import network from './network.jsx';

const rootReducer = combineReducers({
  mode,
  header,
  tournament,
  network,
});

export default rootReducer;
