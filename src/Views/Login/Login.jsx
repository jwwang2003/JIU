import React, { Component } from 'react';
import './Login.css';

import logo from './images/logo.png';
import googleIcon from './images/google.svg';
import facebookIcon from './images/facebook.svg';
import weixinIcon from './images/weixin.png';

class Login extends Component {
  render() {
    const Version = this.props.lastUpdated;
    return (
      <div className="container">
        <div className="logo">
          <img alt="" src={logo}></img>
        </div>
        <div className="buttonContainer">
          <div id="google-btn" className="button"><img alt="" src={googleIcon}></img>Login in with Google</div>
          <div id="facebook-btn" className="button"><img alt="" src={facebookIcon}></img>Login in with Facebook</div>
          <div id="weixin-btn" className="button"><img alt="" src={weixinIcon}></img>Login in with Wechat</div>
        </div>
          <div className="bottom">
            <div className="item">Version {Version}</div>
            <div className="item">Brought to you by Brian & Jimmy</div>
          </div>
      </div>
    );
  }
}

export default Login;
