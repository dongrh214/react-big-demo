// ------------------------------------
// Constants
// ------------------------------------
//引入公共Constants
import { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAIL } from  '../../../constants/request'
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';


// ------------------------------------
// Actions
// ------------------------------------
//引入公共Actions
import { createRequest, createRequestSuccess, createRequestFail } from '../../../actions/request';

export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        });
        resolve()
      }, 200)
    })
  }
};


export const actions = {
  createRequest,
  createRequestSuccess,
  createRequestFail,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,

  [CREATE_REQUEST_SUCCESS]    : (state, action) => {

    // console.log('action:',action.payload);
    return action.payload
  },
  [CREATE_REQUEST_FAIL]    : (state, action) => state + action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  // return handler ? handler(state, action) : state

  const s = handler ? handler(state, action) : state;

  // console.log('s:',s)

  return s;
}
