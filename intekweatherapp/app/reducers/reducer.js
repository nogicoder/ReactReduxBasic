import { combineReducers } from "redux";
import dark from "../styles/dark";
import light from "../styles/light";
import data from "../data/city.list.json";


// Initializing the state
const initialState = {
    style: dark,
    city: data[4],
};

// First Reducer for the style
function changeStyleReducer(state = initialState.style, action) {
    if (action.type === "CHANGE_STYLE") {
        if (state === dark) {
            return light;
        } else {
            return dark;
        }
    }
    return state;
}

// Second Reducer for the city instance
function changeCityReducer(state = initialState.city, action) {
    if (action.type === "CHANGE_CITY") {
        return action.city;
    }
    return state;
}

// Create rootReducer to combine all available reducers
const rootReducer = combineReducers({
    style: changeStyleReducer,
    city: changeCityReducer,
});

export default rootReducer;