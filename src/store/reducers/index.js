import {combineReducers} from 'redux';

import dirReducer from './dir';

const applicationReducer = combineReducers({
  dir: dirReducer,
});

const rootReducers = (state, action) => {
  return applicationReducer(state, action);
};

export default rootReducers;
