import { put, call, takeEvery } from 'redux-saga/effects'

import { receviceData, requestFail} from '../actions/request'

export function* incrementAsync() {
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
  try {
    const data = yield call(fetchData, action.url);
    yield put( receviceData(data,action.url) );
    //暂时用此方法回调，待需求更好的方法替换
    action.cb && action.cb(data)
  } catch (err){
    console.log('err:',err)
  }
}

export default function* rootSaga() {
  yield takeEvery('CREATE_REQUEST', createRequest);
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)

}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

