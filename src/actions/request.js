/**
 * Created by dongruihe on 2017/8/3.
 */

// ------------------------------------
// Actions
// ------------------------------------
export function createRequestSuccess (value = 1) {
  return {
    type    : CREATE_REQUEST_SUCCESS,
    payload : value
  }
}
export function createRequestFail (value = 1) {
  return {
    type    : CREATE_REQUEST_FAIL,
    payload : value
  }
}

const success = (dispatch, result) => {
  dispatch({
    type: 'CREATE_REQUEST_SUCCESS',
    payload: result
  });
  console.log('result',result.json());
  return result
};

const fail = (dispatch, err) => {
  dispatch({
    type: 'CREATE_REQUEST_FAIL',
    err
  });
  return err
};


export const createRequest = (url) => dispatch => {
  (async function () {
    try {
      const result = await fetch(url,{
        method:'get',
        credentials: 'include',
      });
      if (result.ok) {
        console.log('fetch succuss')
      }
      if (result.status === 404) {
          console.log('fetch 404 !')
      }
      //数据json化
      const data = await result.json();
      return success(dispatch, data)
    } catch (err) {
      // console.log('err:',err);
      // return fail(dispatch, err)
    }
  })();
};

