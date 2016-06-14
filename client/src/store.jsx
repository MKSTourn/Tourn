import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers/index';

// import all hard coded data for default state
import rules from './rules';
import messages from './messages';

// create an object for the default data
const defaultState = {
  rules,
  messages,
};

const store = createStore(rootReducer, defaultState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
  return store;
}
