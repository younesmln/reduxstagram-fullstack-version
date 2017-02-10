import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga';
// import the root reducer
import rootReducer from './reducers/index'
import { postsFetchingStart } from './actions/actionCreators';
import rootSaga from './saga';
/*import comments from './data/comments'
import posts from './data/posts'

//create an object for the default data
const defaultState = { posts, comments };*/

const sagaMiddleware = createSagaMiddleware();

// enable Redux Dev Tools
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

const store = createStore(rootReducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(rootSaga);

// hot reloading the reducer
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

store.dispatch(postsFetchingStart());

export default store
