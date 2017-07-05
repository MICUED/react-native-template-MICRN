import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialNavState } from './reducer/index.js';
const middlewares = [thunk];
let middle;
if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  middle = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  middle = applyMiddleware(...middlewares);
}

export default function configureStore(initialNavState) {
  const store = createStore(reducer, initialNavState, middle);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducer/index.js').default);
    });
  }
  return store;
}