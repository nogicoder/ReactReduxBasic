// Import Components
import React, { Component } from "react";
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


// The component that listing movie in the list
class MovieList extends Component {
    render() {
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

export default MovieList;