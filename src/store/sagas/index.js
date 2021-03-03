import {all, fork} from 'redux-saga/effects';

import companySaga from './company';
import userSaga from './user';

export default function* root() {
  yield all([fork(companySaga), fork(userSaga)]);
}
