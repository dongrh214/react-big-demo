/**
 * Created by dongruihe on 2017/8/3.
 */

// ------------------------------------
// Constants
// ------------------------------------
export const BEGIN_REQUEST = 'BEGIN_REQUEST';
export const END_REQUEST = 'END_REQUEST';

// ------------------------------------
// Actions
// ------------------------------------
export function beginRequest() {
  return {
    type    : BEGIN_REQUEST,
    payload : true
  }
}
export function endRequest() {
  return {
    type    : END_REQUEST,
    payload : false
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BEGIN_REQUEST] : (state, action) => true,
  [END_REQUEST] : (state, action) => false
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false;
export default function requestReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}











