import React from "react";


// Main action is to change the theme between light and dark
function changeTheme() {
    return {
        type: "CHANGE_THEME",
    };
};

export default changeTheme;