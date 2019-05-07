// Import Components
import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    Image,
    Button,
    Linking,
} from "react-native";

// Import the data
import * as movies from "../data/Info.json";

// Function to pass state as component's props
function mapStateToProps(state) {
    return { style: state.style };
}

// The component that listing movie in the list
class ConnectedMovieList extends Component {
    render() {
        const style = this.props.style;
        return(

            // Make a scroll experience with FlatList to load item only when scroll near its position
            <FlatList style={style.movies} data={movies.default} renderItem={({ item }) => {

            // Return individual items in the list
            return (
                <View style={style.movie}>
                <Text style={style.title}>
                    {item.title}
                </Text>
                <Image
                    source={{ uri: item.image }}
                    style={style.image}
                    resizeMode="contain"
                />
                <Button
                    title="MORE INFO"
                    color="#00bfff"
                    onPress={() => Linking.openURL(item.url)}
                    style={style.button}
                />
                </View>
            );
            }}
            keyExtractor={(item, index) => index.toString()} />
        );
    }
}

const MovieList = connect(mapStateToProps)(ConnectedMovieList);
export default MovieList;