import * as actionTypes from "../actionTypes/authActionTypes";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
    case actionTypes.AUTH_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
    case actionTypes.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    case actionTypes.AUTH_FAIL:
    case actionTypes.AUTH_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        auth: null,
        errors: action.payload,
      };
    //   Clear Errors
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
