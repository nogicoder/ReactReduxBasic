import React, { Component } from "react";
import {
    View,
} from "react-native";

// Import location data
import * as data from "./app/data/city.list.json";

class PickerPanel extends Component {

  // Run the function after done rendering
  componentDidMount() {
    this.updateCity(this.state.city.name);
  }

  // Update the state based on value chosen in Picker component
  updateCity = itemValue => {
    data.default.map(item => {
      if (item.name === itemValue) {
        this.setState({
          cityname: itemValue,
          text: itemValue,
          city: item
        });
        this.fetchWeather(item);
      }
    });
  };

  render() {
    return (
      <View>
        {/* Display Picker component */}
        <Picker
          style={this.state.style.picker}
          selectedValue={this.state.cityname}
          onValueChange={this.updateCity}
        >
          {/* Listing all items in the data file */}
          {data.default.map((item, index) => (
            <Picker.Item
              color="#00BFFF"
              label={item.name}
              value={item.name}
              key={index}
            />
          ))}
        </Picker>
      </View>
    );
  }
}

export default PickerPanel;