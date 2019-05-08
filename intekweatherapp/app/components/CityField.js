import React, { Component } from "react";
import {
    View,
    TextInput,
} from "react-native";
import { connect } from "react-redux";
import { changeCity } from "../actions/action";

// Import location data
import data from "../data/city.list.json";


//  Connect the store into component's props
function mapStateToProps(state) {
  return {
    style: state.style,
    city: state.city
  };
}

//  Connect the action into component's props
function mapDispatchToProps(dispatch) {
  return {
    changeCity: (city) => dispatch(changeCity(city))
  };
}

//  Creating City Field Input component
class ConnectedCityField extends Component {

  // This component is a Stateful component.
  // @text: To hold state change when typing into the field
  // @placeholder: To preserve the prevState value so the textinput field can receive change
  // from the Picker component, as well as staying editable without depending on the global state
  constructor(props) {
    super(props);
    this.state = {
      text: data[4].name,
      placeholder: data[4].name
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Update the local state when there is change in the global state
  componentDidUpdate() {
    if (
      !(this.props.city.name === this.state.text) &&
      this.state.text === this.state.placeholder
    ) {
      this.setState({
        text: this.props.city.name,
        placeholder: this.props.city.name
      });
    }
  }

  // Update the local state based on value submitted 
  onSubmit() {
    for (let i = 0; i < data.length; i++) {
      const city = data[i];
      if (city.name === this.state.text) {
        this.props.changeCity(city);
        this.setState({
          placeholder: this.state.text
        });
      }
    }
  }

  // Rendering the component
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

// Connect the component to global state and actions
const CityField = connect(mapStateToProps, mapDispatchToProps)(ConnectedCityField);

export default CityField;