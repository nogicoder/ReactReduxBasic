import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { changeStyle } from "../actions/action";


// Connect the global state into the component's props
function mapStateToProps(state) {
  return {
    style: state.style
  };
}

// Connect the actions to the component's props
function mapDispatchToProps(dispatch) {
  return {
    changeStyle: () => dispatch(changeStyle())
  };
}

class ConnectedHeader extends Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  // Change state of the whole App Component between dark and light theme 
  // when the Touchable component is touched
  onPress() {
    this.props.changeStyle();
  };
  
  render() {
    const style = this.props.style;
    return (
      <View>

        {/* The App Title */}
        <Text style={style.welcome}>Weather App</Text>

        {/* Change Theme using the description line as a touchable component */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={style.description}>Weather Statistics</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Connect the component to global state and actions
const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);

export default Header;