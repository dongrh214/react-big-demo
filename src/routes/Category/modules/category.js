/**
 * Created by dongruihe on 2017/8/10.
 */
// ------------------------------------
// Constants
// ------------------------------------
//引入公共Constants
import { CREATE_REQUEST_SUCCESS, CREATE_REQUEST_FAIL } from  '../../../constants/request'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_REQUEST_SUCCESS]    : (state, action) => {
    if (action.url && action.url.indexOf('secondCategory') > -1) {
      return Object.assign({}, state, {
        secondCategory: action.payload
      })
    } else {
      return Object.assign({}, state, {
        mainCategory: action.payload
      })
    }
    return action.payload;
  },
  [CREATE_REQUEST_FAIL]    : (state, action) => state + action.payload,
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function categoryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  const s = handler ? handler(state, action) : state;

  return s;
}
