import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

// import the root reducer
import tournamentReducer from './reducers/tournament.jsx';
import rootReducer from './reducers/root.jsx';
import state from '../../data/state.jsx';
import socketMiddleware from './actions/socket_middleware.jsx';
import { socket } from './utilities/socketContainer.jsx';

// create an object for the default data

const initialState = fromJS(state);

console.log('INITIAL_STATE', initialState);
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(socketMiddleware(socket)),
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
