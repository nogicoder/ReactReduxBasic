import { createStore } from "redux";
import rootReducer from "../reducers/reducer.js";

// Create store for the application based on the rootReducer
const store = createStore(rootReducer);

export default store;