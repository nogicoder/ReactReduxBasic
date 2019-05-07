// Import Components
import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  TouchableOpacity
} from "react-native";


// Import the data
import * as movies from "./Info.json";


// Main App Component 
export default class App extends Component {

  // Define initial props and state
  constructor(props) {
    super(props);
    this.state = { style: dark };
  }

  // Change state of the whole component when a touchable component is pressed
  onPress = () => {
    if (this.state.style === dark) {
      this.setState({ style: (this.state.style = light) });
    } else {
      this.setState({ style: (this.state.style = dark) });
    }
  };

  // Render the JSX
  render() {
    return (

      // Initialize a View
      <View style={this.state.style.container}>

        <Text style={this.state.style.welcome}>Basic React Native App</Text>

        {/* Set the app description as a touchable component */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={this.state.style.description}>Top Ten Movies of IMDB</Text>
        </TouchableOpacity>

        {/* Make a Scroll experience through FlatList to load item when needed*/}
        <FlatList style={this.state.style.movies} data={movies.default} renderItem={( {item} ) => {

            // Return individual items in the list
            return (
              <View style={this.state.style.movie}>
                <Text style={this.state.style.title}>
                  {item.title}
                </Text>
                <Image
                  source={{ uri: item.image }}
                  style={this.state.style.image}
                  resizeMode="contain"
                />
                <Button
                  title="MORE INFO"
                  color="#00bfff"
                  onPress={() => Linking.openURL(item.url)}
                  style={this.state.style.button}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}/>
      </View>
    );
  }
}


// Define light theme styles
const light = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1
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


// Define dark theme styles
const dark = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1
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
