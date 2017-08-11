/**
 * Created by dongruihe on 2017/8/11.
 */
import { put, takeEvery } from 'redux-saga/effects'



function* fetchData (action) {
  // try {
  //   const data = yield getPeople();
  //   //yield toastShort('网络发生错误，请重试');
  //   yield put({ type : 'REQUEST_TEST'});
  // } catch (e) {
  //   yield toastShort('网络发生错误，请重试');
  //   //yield put({ type: 'SET_TEST1_TEXT'});
  // }
  console.log(1234)
}

function* dataSaga () {
  yield takeEvery(REQUEST_TEST, fetchData)
}
export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default dataSaga
