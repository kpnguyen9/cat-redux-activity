import { createStore } from "redux";
import { catReducer } from "../reducers/catReducer";

const store = createStore(
  catReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
