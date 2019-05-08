import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

// Import location data
import * as data from "./app/data/city.list.json";

class CityField extends Component {
    
  // Update the state based on value chosen in TextInput component
  submitInput = () => {
    for (let i = 0; i < data.default.length; i++) {
      if (data.default[i].name == this.state.text) {
        this.fetchWeather(data.default[i]);
      }
    }
  };

  render() {
    return (
      <View>
        {/* Display City name indicator */}
        <View style={this.state.style.city}>
          <TextInput
            value={this.state.text}
            style={this.state.style.city_inside}
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={this.submitInput}
          />
        </View>
      </View>
    );
  }
}

export default CityField;