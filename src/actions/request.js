/**
 * Created by dongruihe on 2017/8/3.
 */

// ------------------------------------
// Actions
// ------------------------------------

const requestSuccess = (dispatch, result, url) => {

  dispatch({
    type: 'REQUEST_SUCCESS',
    payload: result,
    url:url || ''
  });
  return result
};

const requestFail = (dispatch, err, url) => {
  dispatch({
    type: 'REQUEST_FAIL',
    err,
    url:url || ''
  });
  return err
};

export const fetchData = (url,params) => (dispatch, getState) => {
  const pms = Object.assign({},params);
  const method = pms.method || 'get';
  return fetch(url, {
    method:method,
    credentials: 'include',
  }).then(response =>
  {
    if (response.ok) {
    }
    if (response.status === 404) {
      console.log('request 404');
    }
    return response.json();
  })
    .then(json => {
        return requestSuccess(dispatch, json, url);
    })
    .catch( err => {
        return requestFail(dispatch, err, url)
    })
};

