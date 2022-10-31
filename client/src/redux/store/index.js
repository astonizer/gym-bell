import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

// Global redux store
export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    process.env.REACT_APP_SERVER === "DEV"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : ""
  )
);
