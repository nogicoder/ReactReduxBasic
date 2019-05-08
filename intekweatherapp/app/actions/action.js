// Defining actions 
export function changeStyle() {
    return {
        type: "CHANGE_STYLE",
    }
}

export function changeCity(city) {
    return {
        type: "CHANGE_CITY",
        city
    }
}