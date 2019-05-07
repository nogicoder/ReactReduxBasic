import dark from "../styles/dark";
import light from "../styles/light";

// Set the initial state for the store
const initialState = {
    style: dark,
};

// The root reducer to manipulate state change, which is style in this case
function rootReducer(state = initialState, action) {
    if (action.type === "CHANGE_THEME" && state.style === dark) {
        return { style: light };
    } else if (action.type === "CHANGE_THEME" && state.style === light) {
        return { style: dark };
    };
    return state;
}

export default rootReducer;