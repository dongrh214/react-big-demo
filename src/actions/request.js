/**
 * Created by dongruihe on 2017/8/3.
 */

// ------------------------------------
// Actions
// ------------------------------------
// export function createRequestSuccess (value = 1) {
//   return {
//     type    : CREATE_REQUEST_SUCCESS,
//     payload : value
//   }
// }
// export function createRequestFail (value = 1) {
//   return {
//     type    : CREATE_REQUEST_FAIL,
//     payload : value
//   }
// }

const success = (dispatch, result, url) => {

  dispatch({
    type: 'CREATE_REQUEST_SUCCESS',
    payload: result,
    url:url || ''
  });
  return result
};

const fail = (dispatch, err, url) => {
  dispatch({
    type: 'CREATE_REQUEST_FAIL',
    err,
    url:url || ''
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
      }
      if (result.status === 404) {
      }
      //数据json化
      const data = await result.json();
      return success(dispatch, data, url)
    } catch (err) {
      return fail(dispatch, err, url)
    }
  })();
};

export const fetchData = (url,params) => (dispatch, getState) => {
  return fetch(url, {
    method:'get',
    credentials: 'include',
  }).then(response =>
  {
    return response.json();
  })
    .then(json => {

        return success(dispatch, json, url);
    })
    .catch( err => {
        return fail(dispatch, err, url)
    })
};

