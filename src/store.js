import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './redux/reducers/main-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promise)
  )
);
