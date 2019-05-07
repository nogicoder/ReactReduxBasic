import {
    StyleSheet,
} from "react-native";


// Define dark theme styles
const dark = StyleSheet.create({
    container: {
        backgroundColor: "black"
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "#00bfff",
        color: "white",
        borderRadius: 10
    },
    description: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "white"
    },
    movies: {
        flex: 1,
        backgroundColor: "black"
    },
    movie: {
        flex: 1,
        alignItems: "stretch",
        margin: 10,
        borderWidth: 1,
        borderColor: "rgb(255,255,255)"
    },
    title: {
        fontSize: 20,
        color: "white",
        padding: 5,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "rgb(255,255,255)",
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: 500,
    },
    button: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "#d6d7da"
    }
});

export default dark;