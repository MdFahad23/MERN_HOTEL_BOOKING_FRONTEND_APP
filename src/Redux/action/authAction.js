import * as actionTypes from "../actionTypes/authActionTypes";
import axios from "axios";
import { API } from "../../Utils/config";
import { authentication } from "../../Utils/auth";

// Login
export const AutLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.AUTH_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${API}/api/v1/auth/login`,
      { email, password },
      config
    );

    authentication(data.token);

    dispatch({ type: actionTypes.AUTH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
};

// Register
export const AutRegister = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.AUTH_REGISTER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${API}/api/v1/auth/register`,
      { username, email, password },
      config
    );
    console.log(data);

    dispatch({ type: actionTypes.AUTH_REGISTER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_REGISTER_FAIL, payload: err.message });
  }
};

// Clear Errors
export const ClearError = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ERROR });
};
