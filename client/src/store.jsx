import { createStore, applyMiddleware } from 'redux';
// import { fromJS } from 'immutable';
import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/root.jsx';
import state from '../../data/state.jsx';
// import axiosMiddleware from './actions/axios_middleware.jsx';

// create an object for the default data
const INITIAL_STATE = state;

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  // applyMiddleware(axiosMiddleware),
  window.devToolsExtension && window.devToolsExtension()
);

//export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = rootReducer.default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;
