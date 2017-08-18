/**
 * Created by dongruihe on 2017/8/10.
 */
// ------------------------------------
// Constants
// ------------------------------------
//引入公共Constants
import { REQUEST_SUCCESS, REQUEST_FAIL } from  '../../../constants/request'
const SELECTED_GOOD_SKU = 'SELECTED_GOOD_SKU';
const TOGGLE_GOODS_OPTION_SKU_LIST = 'TOGGLE_GOODS_OPTION_SKU_LIST';
// ----------------------
// Actions
export const selectedGoodSku = (dispatch, index) => {
  dispatch({
    type: SELECTED_GOOD_SKU,
    payload: index,
  });
};
export const toggleGoodsOptionSkuList = (dispatch, index) => {
  dispatch({
    type: TOGGLE_GOODS_OPTION_SKU_LIST,
    payload: null
  })
}
// -----------------------


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_SUCCESS]    : (state, action) => {
    if (action.payload) {
      return Object.assign({}, state, { data: action.payload.data}) ;
    }
    return state;
  },
  [REQUEST_FAIL]    : (state, action) => state + action.payload,
  [SELECTED_GOOD_SKU]: (state, action) => {
    return Object.assign({},state,{selectedGoodSkuInfo: state.data.goodsSkuList[action.payload]});
  },
  [TOGGLE_GOODS_OPTION_SKU_LIST]: (state, action) => {


    return Object.assign({}, state, {showGoodsSkuOptionList: !state.showGoodsSkuOptionList})
  }
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data:null,
  showGoodsSkuOptionList: false
};
export default function goodDetailReducer (state = initialState, action) {

  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
