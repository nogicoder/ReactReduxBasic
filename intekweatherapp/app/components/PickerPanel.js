import React, { Component } from "react";
import {
    Picker,
} from "react-native";
import { connect } from "react-redux";
import changeCity from "../actions/action";
// Import location data
import data from "./app/data/city.list.json";

function mapStateToProps(state) {
  return {
    style: state.style,
    city: state.city
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCity: (city) => dispatch(changeCity(city))
  };
}

class ConnectedPickerPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: data.default[4]
    }
    this.onChange = this.onChange.bind(this);
  }

  // Update the state based on value chosen in Picker component
  onChange(cityname) {
    this.setState({
      text: cityname
    });
    data.default.map(city => {
      if (city.name === cityname) {
        this.props.changeCity(city);
      }
    });
  }

  render() {
    const style = this.props.style;
    return (
        <Picker
          style={style.picker}
          selectedValue={text}
          onValueChange={this.onChange}
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
    );
  }
}

const PickerPanel = connect(mapStateToProps, mapDispatchToProps)(ConnectedPickerPanel);
export default PickerPanel;