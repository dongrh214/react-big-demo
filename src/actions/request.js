/**
 * Created by dongruihe on 2017/8/3.
 */

// ------------------------------------
// Actions
// ------------------------------------

export const requestSuccess = (dispatch, result, url) => {

  dispatch({
    type: 'REQUEST_SUCCESS',
    payload: result,
    url:url || ''
  });
  return result
};

export const requestFail = (dispatch, err, url) => {
  dispatch({
    type: 'REQUEST_FAIL',
    err,
    url:url || ''
  });
  return err
};





export const receviceData = (result, url) => {

  console.log('result:',result)
  return {
    type: 'REQUEST_SUCCESS',
    payload: result,
    url:url || ''
  };
};
export const createRequest = (dispatch, url, params) => {
  dispatch({
    type: 'CREATE_REQUEST',
    url:url || '',
    params: params
  });
  return {}
};


//redux-thunk
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

