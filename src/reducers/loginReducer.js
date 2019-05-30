import types from '../actions/types';

const initialState = {
  loginStatus: false,
  payload: {}
}


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.LOGIN_SUCCESS):
      return {
        ...state,
        loginStatus: true,
        payload: action.payload
      }
    case (types.LOGIN_FAILS):
      return {
        ...state,
        loginStatus: false,
        payload: action.payload
      }
    default:
      return state
  }
};

export default loginReducer;
