import { CLEAR_ERRORS, GET_ERRORS } from "../constants/errorConstants";

const initialState = {
  message: null,
  status: null,
};

export default function errorReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
      };

    case CLEAR_ERRORS:
      return {
        message: null,
        status: null,
      };

    default:
      return state;
  }
}
