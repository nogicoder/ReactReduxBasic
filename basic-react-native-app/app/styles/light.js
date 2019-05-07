import {
    StyleSheet,
} from "react-native";


// Define light theme styles
const light = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "#00bfff",
        color: "black",
        borderRadius: 10
    },
    description: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "black"
    },
    movies: {
        flex: 1,
        backgroundColor: "white"
    },
    movie: {
        flex: 1,
        alignItems: "stretch",
        margin: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.095)"
    },
    title: {
        fontSize: 20,
        color: "black",
        padding: 5,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.095)",
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: 500
    },
    button: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        margin: 10
    }
});

export default light;