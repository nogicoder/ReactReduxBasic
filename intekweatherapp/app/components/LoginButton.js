import React, { Component } from "react";
import { LoginButton, AccessToken } from "react-native-fbsdk";
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        style: state.style
    };
}

class ConnectedLoginButton extends Component {
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
const LoginButton = connect(mapStateToProps)(ConnectedLoginButton);
export default LoginButton;