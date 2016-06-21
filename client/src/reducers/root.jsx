//
// Root app reducer
//
// TODO: Change to redux-immutable 
import { combineReducers } from 'redux';
import header from './header.jsx';
import tournament from './tournament.jsx';
import mode from './mode.jsx';

const rootReducer = combineReducers({
  header,
  tournament,
  mode,
});

export default rootReducer;
