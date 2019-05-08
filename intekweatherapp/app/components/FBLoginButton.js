import React, { Component } from "react";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import { connect } from "react-redux";

// Connect the global state into the component's props
function mapStateToProps(state) {
    return {
        style: state.style
    };
}

// Creating FBLogin Button component
class ConnectedFBLoginButton extends Component {
  render() {
      const style = this.props.style;
      return (
            <LoginButton
                style = {style.login}

                // When logging in 
                onLoginFinished={(error, result) => {

                if (error) {
                    console.log("login has error: " + result.error);

                } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                    
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                    });
                }
                }}

                // When logging out
                onLogoutFinished={() => console.log("logout.")}
            />
        )
  }
}

// Connect the component to global state and actions
const FBLoginButton = connect(mapStateToProps)(ConnectedFBLoginButton);

export default FBLoginButton;