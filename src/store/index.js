import createSagaMiddleware from 'redux-saga';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import rootSaga from './sagas';
import rootReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, ...getDefaultMiddleware({thunk: false})];

const store = configureStore({
  reducer: rootReducers,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
