import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  componentClicked = () => console.info("Clicked!")

  responseFacebook = response => {
    console.info(response)
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {

    } else {
      fbContent = (
        <FacebookLogin
          appId="329411392449711"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />
      );
    }

    return (
      <div>{fbContent}</div>
    )
  }
}
