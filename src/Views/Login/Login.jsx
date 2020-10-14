import React, { Component } from 'react';
import './Login.css';

import logo from './images/logo.png';
import googleIcon from './images/google.svg';
import facebookIcon from './images/facebook.svg';
import weixinIcon from './images/weixin.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const Version = this.props.lastUpdated;
    return (
      <div className="container">
        <div className="container-upper">
          <div id="main" className="main">
            <div className="logo">
              <img alt="" src={logo}></img>
            </div>
            <div className="buttonContainer">
              <div id="google-btn" className="button" onClick={() => this.props.signInWithGoogle()}><img alt="" src={googleIcon}></img>谷歌登录</div>
              <div id="facebook-btn" className="button" onClick={() => this.props.signInWithFacebook()}><img alt="" src={facebookIcon}></img>脸书登录</div>
              <div id="weixin-btn" className="button"><img alt="" src={weixinIcon}></img>微信登录</div>
            </div>
          </div>
        </div>
        <div className="container-lower">
            <div className="item">Version {Version}</div>
            <div className="item">Brought to you by Brian & Jimmy</div>
        </div>
      </div>
    );
  }
}

export default Login;
