// Import Components from React Libraries
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
} from "react-native";
import { Provider } from "react-redux";
import store from "./app/store/store";
import HomeScreen from "./app/screens/HomeScreen";

// Main App Component
class App extends Component {
  render() {
    return (

      // Use Provider tag to make the store available to all nested components
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    );
  }
}

export default App;