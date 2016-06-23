//
// Root app reducer
//
// TODO: Change to redux-immutable
import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';
import network from './network.jsx';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
  network,
});

export default rootReducer;
