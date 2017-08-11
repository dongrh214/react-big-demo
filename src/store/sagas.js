import { put, call, takeEvery } from 'redux-saga/effects'
// import { delay } from '../../../../src'

export function* incrementAsync() {
  // yield call(delay, 1000)
  console.log(123456)
  yield put({
    type: 'INCREMENT',
    payload:1
  })
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)

}


export function* helloSaga() {
  console.log('Hello Sagas!');
}

