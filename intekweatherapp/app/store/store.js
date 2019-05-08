import { createStore } from "react-redux";
import rootReducer from "../reducers/reducer.js";

const store = createStore(rootReducer);
export default store;