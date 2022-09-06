import axios from "axios";
import { clearErrors, returnErrors } from "./errorActions";

import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../constants/authConstants";

/**
 *
 * @param {Object} user
 * @description Register new user in database
 *
 */
export const registerUser = (user) => async (dispatch) => {
  let clearErrorsAction = clearErrors();
  dispatch(clearErrorsAction);

  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      "http://localhost:5000/api/auth/register",
      JSON.stringify(user),
      config
    )
    .then((res) => {
      let registerSuccessAction = {
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      };
      dispatch(registerSuccessAction);
    })
    .catch((err) => {
      let registerFailAction = { type: REGISTER_FAIL };
      let returnErrorsAction = returnErrors(err.response);

      console.log(err);
      dispatch(registerFailAction);
      dispatch(returnErrorsAction);
    });
};

/**
 *
 * @param {Object} user
 * @description Login user on website
 *
 */
export const loginUser = (user) => async (dispatch) => {
  let clearErrorsAction = clearErrors();
  dispatch(clearErrorsAction);

  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(user);
  axios
    .post("http://localhost:5000/api/auth/login", JSON.stringify(user), config)
    .then((res) => {
      let loginSuccessAction = { type: LOGIN_SUCCESS, payload: res.data.token };
      dispatch(loginSuccessAction);
    })
    .catch((err) => {
      let loginFailAction = { type: LOGIN_FAIL };
      let returnErrorsAction = returnErrors(
        err.response.data.error,
        err.response.status
      );

      dispatch(loginFailAction);
      dispatch(returnErrorsAction);
    });
};

/**
 *
 * @description Logout user from website
 *
 */
export const logoutUser = () => (dispatch) => {
  let clearErrorsAction = clearErrors();
  dispatch(clearErrorsAction);

  let logoutSuccessAction = { type: LOGOUT_SUCCESS };
  dispatch(logoutSuccessAction);
};

/**
 *
 * @description Load user sessions from local storage
 *
 */
export const loadUser = () => (dispatch) => {
  let clearErrorsAction = clearErrors();
  dispatch(clearErrorsAction);

  const token = localStorage.getItem("bellToken");

  if (!token) {
    let returnErrorsAction = returnErrors("No bellToken found", 404);
    let authErrorAction = { type: AUTH_ERROR };

    dispatch(returnErrorsAction);
    return dispatch(authErrorAction);
  }

  let authSuccessAction = { type: AUTH_SUCCESS, payload: token };
  dispatch(authSuccessAction);
};
