// Import Components
import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";


// The Header Component with a clickable element 
class Header extends Component {

  constructor(props) {
    super(props);
  }

  // Render the JSX
  render() {
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

export default Header;