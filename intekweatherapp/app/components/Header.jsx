import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

class Header extends Component {

  // Change state of the whole App Component between dark and light theme when a button is touched
  onPress = () => {
    if (this.state.style === dark) {
      this.setState({ style: light });
    } else {
      this.setState({ style: dark });
    }
  };
  
  render() {
    return (
      <View>
        {/* The App Title */}
        <Text style={this.state.style.welcome}>Weather App</Text>

        {/* Change Theme using the description line as a button */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={this.state.style.description}>Weather Statistics</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;