import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
