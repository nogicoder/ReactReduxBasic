import { combineReducers } from "redux";
import dark from "../styles/dark";
import light from "../styles/light";
import data from "../data/city.list.json";

const initialState = {
    style: dark,
    city: data[4],
};

function changeStyleReducer(state = initialState, action) {
    if (action.type === "CHANGE_STYLE") {
        if (state.style === dark) {
            return state.assign({}, {
                style: light,
                city: state.city
            });
        } else {
            return state.assign({}, {
                style: dark,
                city: state.city
            });
        }
    }
    return state;
}

function changeCityReducer(state = initialState, action) {
    if (action.type === "CHANGE_CITY") {
        return state.assign({}, {
            style: state.style,
            city: action.city
        });
    }
    return state;
}

const rootReducer = combineReducers({
    style: changeStyleReducer,
    city: changeCityReducer,
});

export default rootReducer;