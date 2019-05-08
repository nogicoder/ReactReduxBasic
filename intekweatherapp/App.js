// Import Components from React Libraries
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
} from "react-native";

import Header from "./app/components/Header";
import Login from "./app/components/Login";
import CityField from "./app/components/CityField";
import PickerPanel from "./app/components/PickerPanel";
import WeatherPanel from "./app/components/WeatherPanel";

// Main App Component
export default class App extends Component {
  
  // Define initial props and state
  constructor(props) {
    super(props);
    this.state = {
      style: dark,
      city: data.default[4],
      text: data.default[4].name,
      temperature: null,
      pressure: null,
      humidity: null,
    };
  }

  // Render the JSX
  render() {

    // Main JSX script
    return (
      // Avoid the keyboard's misbehavior when user typing in by using this component
      <KeyboardAvoidingView
        style={this.state.style.container}
        behavior="padding"
        keyboardVerticalOffset="-200"
        enabled
      >

        <Header />

        <Login />

        <CityField />

        <PickerPanel />

        <WeatherPanel />

      </KeyboardAvoidingView>
    );
  }
}