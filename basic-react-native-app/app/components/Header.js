// Import Components
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import changeTheme from "../action/action";


// Function to pass state as component's props
function mapStateToProps(state) {
  return { style: state.style };
}

// Function to dispatch actions in the component
function mapDispatchToProps(dispatch) {
  return {
    changeTheme: () => dispatch(changeTheme())
  };
}

// The Header Component with a clickable element 
class ConnectedHeader extends Component {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  // Catch the press event to dispatch the actions
  onPress(event) {
    this.props.changeTheme();
  }

  // Render the JSX
  render() {
    const style = this.props.style;
    return (
        <View style={style.container}>
          <Text style={style.welcome}>Basic React Native App</Text>

          {/* Set the app description as a touchable component */}
          <TouchableOpacity onPress={this.onPress}>
            <Text style={style.description}>Top Ten Movies of IMDB</Text>
          </TouchableOpacity>        
        </View>
    );
  }
}

// Connect the component with the state and dispatch
const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);

export default Header;