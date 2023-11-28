import {take, put, spawn, call,takeEvery} from 'redux-saga/effects';
import { searchServices } from '../../api';
import {searchServiceRequest, searchServiceFailure, searchServiceSuccess} from '../actions/actionCreators';
import {  SEARCH_SERVICES_REQUEST, SEARCH_SERVICES_REQUEST_ID  } from '../actions/actionsType';


function* watchSearchServicesDetailsSaga() {
  yield takeEvery(SEARCH_SERVICES_REQUEST_ID, handleSearchServicesIdSaga);
}
function* watchSearchServicesSaga() {
    yield takeEvery(SEARCH_SERVICES_REQUEST, handleSearchServicesSaga);
}

function* handleSearchServicesIdSaga(action) {
  try{
    const service = yield call(searchServices,action.search);
    debugger
    yield put(searchServiceSuccess(null, service));
  }catch(e){
    yield put(searchServiceFailure(e.message));
  }
}
function* handleSearchServicesSaga() {
  try{
    const data = yield call(searchServices,'');
    yield put(searchServiceSuccess(data));
  }catch(e){
    yield put(searchServiceFailure(e.message));
  }
}
export default function* saga() {
  yield spawn(watchSearchServicesDetailsSaga);
  yield spawn(watchSearchServicesSaga);
}