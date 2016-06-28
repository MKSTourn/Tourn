//
// Root app reducer
//

import { combineReducers } from 'redux-immutable';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';
import network from './network.jsx';
import { fromJS } from 'immutable';

const rootReducer = combineReducers({
  mode,
  header,
  tournament,
});

export default (state, action) => rootReducer(network(state, action), action);
