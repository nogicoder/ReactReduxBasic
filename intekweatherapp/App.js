// Import Components from React Libraries
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
} from "react-native";
import { Provider } from "react-redux";
import store from "./app/store/store";

import Header from "./app/components/Header";
// import Login from "./app/components/Login";
// import CityField from "./app/components/CityField";
// import PickerPanel from "./app/components/PickerPanel";
// import WeatherPanel from "./app/components/WeatherPanel";


// Main App Component
class App extends Component {
  render() {
    return (

      // Avoid the keyboard's misbehavior when user typing in by using this component
      <Provider store={store}>

        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset="-200"
          enabled
        >

          <Header />

          {/* <Login />

          <CityField />

          <PickerPanel />

          <WeatherPanel /> */}

        </KeyboardAvoidingView>

      </Provider>
    );
  }
}

export default App;