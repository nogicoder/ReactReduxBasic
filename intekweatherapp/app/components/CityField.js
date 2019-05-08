import React, { Component } from "react";
import {
    View,
    TextInput,
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
    changeCity: (city) => dispatch(changeCity(city)); 
  }
}

class ConnectedCityField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: data.default[4]
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidUpdate() {
    if (!this.props.city.name === this.state.text) {
      this.setState({text: this.props.city.name});
    }
  }

  // Update the state based on value chosen in TextInput component
  onSubmit() {
    for (let i = 0; i < data.default.length; i++) {
      const city = data.default[i];
      if (city.name === this.state.text) {
        this.props.changeCity(city);
      }
    }
  };

  render() {
    const style = this.props.style;
    return (

        <View style={style.city}>
          <TextInput
            value={this.state.text}
            style={style.city_inside}
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={this.onSubmit}
          />
        </View>
    );
  }
}

const CityField = connect(mapStateToProps, mapDispatchToProps)(ConnectedCityField)
export default CityField;