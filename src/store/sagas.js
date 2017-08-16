import { put, call, takeEvery } from 'redux-saga/effects'

import { receviceData, requestFail} from '../actions/request'

export function* incrementAsync() {
  // yield call(delay, 1000)
  console.log(123456);
  yield put({
    type: 'INCREMENT',
    payload:1
  })
}

const fetchData = (url, params) => {
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return json
    })
};

export function* createRequest(action) {
   //yield put( actions.requestPosts(reddit) )  提示开始request

   const data = yield call(fetchData, action.url);
   // console.log(1234,action);

   yield put( receviceData(data,action.url) )
}

export default function* rootSaga() {
  yield takeEvery('CREATE_REQUEST', createRequest);
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)

}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

