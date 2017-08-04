import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'; // 由redux-immutable创建

import locationReducer from './location'
import fetchReducer from './fetch'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    isFetching:fetchReducer,
    ...asyncReducers
  })
};

//注入新的reducer并更换store绑定的reducer
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
