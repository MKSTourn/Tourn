//
// Root app reducer
//
// TODO: Change to redux-immutable
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
  routing: routerReducer,
});

export default rootReducer;
