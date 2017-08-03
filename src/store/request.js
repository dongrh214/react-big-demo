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


export const createRequest = () => dispatch => {

  const success = (result) => {
    dispatch({
      type: 'CREATE_REQUEST_SUCCESS',
      payload: result
    });
    console.log('result',result.json());
    return result
  };

  const fail = (err) => {
    dispatch({
      type: 'CREATE_REQUEST_FAIL',
      err
    });
    return err
  };

  const requestData = async function () {
    console.log('start');
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
    try {
      const result = await fetch(url);
      return success(result)
    } catch (err) {
      return fail(err)
    }
  };
  requestData();
};

export const actions = {
  createRequest,
  createRequestSuccess,
  createRequestFail
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_REQUEST]    : (state, action) => state + action.payload,
  [CREATE_REQUEST_SUCCESS] : (state, action) => state * 2,
  [CREATE_REQUEST_FAIL] : (state, action) => state * 2
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
export default function requestReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}











