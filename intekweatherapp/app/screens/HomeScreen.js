// Import Components from React Libraries
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
} from "react-native";
import { connect } from "react-redux";

import Header from "../components/Header";
import FBLoginButton from "../components/FBLoginButton";
import CityField from "../components/CityField";
import PickerPanel from "../components/PickerPanel";
import WeatherPanel from "../components/WeatherPanel";

//  Connect the store into component's props
function mapStateToProps(state) {
    return {
        style: state.style,
        city: state.city
    };
}

// Defining the Home Screen of the App
class ConnectedHomeScreen extends Component {

  // Rendering the component
  render() {
    const style = this.props.style;
    return (

      // Avoid the keyboard's misbehavior when user typing in by using this component
      <KeyboardAvoidingView
        style={style.container}
        behavior="padding"
        keyboardVerticalOffset="-200"
        enabled
      >

        {/* Positioning Header component */}
        <Header />

        <View style={style.weather}>
        
          {/* Positioning FBLogin component */}
          <FBLoginButton/>

          {/* Positioning City Field Input component */}
          <CityField />

          {/* Positioning Picker component */}
          <PickerPanel />

          {/* Positioning WeatherInfo Panel component */}
          <WeatherPanel />

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const HomeScreen = connect(mapStateToProps)(ConnectedHomeScreen);

export default HomeScreen;