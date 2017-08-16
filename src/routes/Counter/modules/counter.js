// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT = 'INCREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export function incrementAsync() {
  return {
    type    : INCREMENT_ASYNC,
    payload : 1
  }
}

export const actions = {
  increment,
  incrementAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INCREMENT]    : (state, action) => {
    console.log(state, action.payload)
    return state + action.payload
  },
  [INCREMENT_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
