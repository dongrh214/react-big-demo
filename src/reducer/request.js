/**
 * Created by dongruihe on 2017/8/3.
 */

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
