import { createStore, compose } from "redux";

import middleware from "./middleware";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
