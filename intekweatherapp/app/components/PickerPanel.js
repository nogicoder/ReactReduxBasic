import React, { Component } from "react";
import {
    Picker,
} from "react-native";
import { connect } from "react-redux";
import { changeCity } from "../actions/action";
// Import location data
import data from "../data/city.list.json";


// Connect the global state into the component's props
function mapStateToProps(state) {
  return {
    style: state.style,
    city: state.city
  };
}

// Connect the global actions into the component's props
function mapDispatchToProps(dispatch) {
  return {
    changeCity: (city) => dispatch(changeCity(city))
  };
}

// Create Picker component
class ConnectedPickerPanel extends Component {
  // This component is a Stateful component.
  // @text: To hold state change when choosing Picker value
  // @placeholder: To preserve the prevState value so the Picker can receive change
  // from the City Input Field component, as well as staying scrollable without depending on the global state
  constructor(props) {
    super(props);
    this.state = {
      text: data[4].name,
      placeholder: data[4].name
    };
    this.onChange = this.onChange.bind(this);
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

  // Update the state based on value chosen in Picker component
  onChange(cityname) {
    this.setState({
      text: cityname,
      placeholder: cityname
    });
    data.map(city => {
      if (city.name === cityname) {
        this.props.changeCity(city);
      }
    });
  }

  // Render the component
  render() {
    const style = this.props.style;
    return (
      <Picker
        style={style.picker}
        selectedValue={this.state.text}
        onValueChange={this.onChange}
      >
      {/* Run loops to display all city */}
        {data.map((item, index) => (
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

// Connect the component to global state and actions
const PickerPanel = connect(mapStateToProps, mapDispatchToProps)(ConnectedPickerPanel);

export default PickerPanel;