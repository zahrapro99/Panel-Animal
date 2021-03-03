// import {call, all, put, takeLatest, select} from 'redux-saga/effects';

// import gate from 'gate';
// import {
//   getCompany,
//   getCompanySuccess,
//   updateCompany,
//   updateCompanySuccess,
//   updateCompanyFailure,
//   updateDepartment,
//   updateDepartmentSuccess,
//   updateDepartmentFailure,
//   createDepartment,
//   createDepartmentSuccess,
//   createDepartmentFailure,
//   deleteDepartment,
//   deleteDepartmentSuccess,
//   deleteDepartmentFailure,
//   cloneDepartment,
//   // cloneDepartmentSuccess,
//   cloneDepartmentFailure,
// } from 'store/reducers/company';
// import toasts from 'providers/toast-provider/toasts';
// import {selectDepartments} from 'store/selectors/companySelector';

// function* watchGetCompany(action) {
//   try {
//     const result = yield call(gate.getCompany);
//     // const departments = yield call(gate.getDepartments);

//     // const activeDepartment = yield select(selectActiveDepartment);
//     // const selectDepartmentsStatus = yield select(selectDepartmentsStatus);
//     // console.log(3, departments.data[0].id, 5, activeDepartment.id, 9, result.data);
//     // departmentId

//     yield put({
//       type: getCompanySuccess.type,
//       payload: result.data,
//     });
//   } catch (e) {
//     yield toasts.getCompanyFailure();
//   }
// }

// // function* watchSetActiveDepartment(action) {
// //   yield put({
// //     type: getCompany.type,
// //   });
// // }

// function* watchUpdateCompany(action) {
//   try {
//     const result = yield call(
//       gate.updateCompany,
//       action.payload.id,
//       action.payload.data,
//     );
//     yield put({
//       type: updateCompanySuccess.type,
//       payload: result.data,
//     });
//     yield toasts.updateCompanySuccess();
//   } catch (e) {
//     yield put({
//       type: updateCompanyFailure.type,
//     });
//     yield toasts.updateCompanyFailure();
//   }
// }

// function* watchUpdateDepartment(action) {
//   try {
//     const result = yield call(
//       gate.updateDepartment,
//       action.payload.id,
//       action.payload.data,
//     );
//     yield put({
//       type: updateDepartmentSuccess.type,
//       payload: result.data,
//     });
//     yield toasts.updateDepartmentSuccess();
//   } catch (e) {
//     yield put({
//       type: updateDepartmentFailure.type,
//     });
//     yield toasts.updateDepartmentFailure();
//   }
// }

// function* watchCreateDepartment(action) {
//   try {
//     const result = yield call(gate.createDepartment, action.payload.data);
//     yield put({
//       type: createDepartmentSuccess.type,
//       payload: result.data,
//     });
//     yield toasts.createDepartmentSuccess();
//   } catch (e) {
//     yield put({
//       type: createDepartmentFailure.type,
//     });
//     yield toasts.createDepartmentFailure();
//   }
// }

// function* watchCloneDepartment(action) {
//   try {
//     const result = yield call(gate.cloneDepartment, action.payload.id);
//     // yield put({
//     //   type: cloneDepartmentSuccess.type,
//     //   payload: result.data,
//     // });
//     yield put({type: getCompany.type});
//     yield toasts.cloneDepartmentSuccess();
//   } catch (e) {
//     yield put({
//       type: cloneDepartmentFailure.type,
//     });
//     yield toasts.cloneDepartmentFailure();
//   }
// }

// function* watchDeleteDepartment(action) {
//   try {
//     const departments = yield select(selectDepartments);

//     if (departments.length < 2) {
//       throw 'cannot deleted this department!';
//     }

//     const result = yield call(gate.deleteDepartment, action.payload.id);
//     yield put({
//       type: deleteDepartmentSuccess.type,
//       payload: result.data,
//     });
//     yield toasts.deleteDepartmentSuccess();
//   } catch (e) {
//     yield put({
//       type: deleteDepartmentFailure.type,
//       payload: {id: action.payload.id},
//     });
//     yield toasts.deleteDepartmentFailure();
//   }
// }

// function* companySaga() {
//   yield all([
//     takeLatest(getCompany.type, watchGetCompany),
//     takeLatest(updateCompany.type, watchUpdateCompany),
//     takeLatest(updateDepartment.type, watchUpdateDepartment),
//     takeLatest(createDepartment.type, watchCreateDepartment),
//     takeLatest(deleteDepartment.type, watchDeleteDepartment),
//     takeLatest(cloneDepartment.type, watchCloneDepartment),
//   ]);
// }

// export default companySaga;
