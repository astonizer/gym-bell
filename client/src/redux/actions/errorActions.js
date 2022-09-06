import { CLEAR_ERRORS, GET_ERRORS } from "../constants/errorConstants";

export const returnErrors = (err, status) => {
  let message = err || "Unrecognized Error";
  return {
    type: GET_ERRORS,
    payload: { message, status: status || 401 },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
