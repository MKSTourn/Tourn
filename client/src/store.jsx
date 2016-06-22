import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';

// import the root reducer
import tournamentReducer from './reducers/tournament.jsx';
import rootReducer from './reducers/root.jsx';
import state from '../../data/state.jsx';
// import axiosMiddleware from './actions/axios_middleware.jsx';

// create an object for the default data

const initialState = fromJS(state);

console.log('INITIAL_STATE', initialState);
const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(axiosMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
);
const childStore = createStore(
  tournamentReducer,
  initialState.tournament,
  // applyMiddleware(axiosMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
);

//export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     const nextRootReducer = rootReducer.default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
