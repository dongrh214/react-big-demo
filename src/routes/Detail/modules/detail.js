/**
 * Created by dongruihe on 2017/8/10.
 */
// ------------------------------------
// Constants
// ------------------------------------
//引入公共Constants
import { REQUEST_SUCCESS, REQUEST_FAIL } from  '../../../constants/request'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_SUCCESS]    : (state, action) => {

    // console.log(1,state,action)
    if (action.payload) {
      return action.payload;
    }
    return state;
  },
  [REQUEST_FAIL]    : (state, action) => state + action.payload,
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function categoryReducer (state = initialState, action) {

  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
