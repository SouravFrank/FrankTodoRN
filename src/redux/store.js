import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

export default store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
