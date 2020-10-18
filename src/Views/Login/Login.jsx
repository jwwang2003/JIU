import React from 'react';
import styles from './Login.module.css';

import logo from './images/logo.png';
import googleIcon from './images/google.svg';
import facebookIcon from './images/facebook.svg';
import weixinIcon from './images/weixin.png';

import { toast } from 'react-toastify';

/**
 * User Authentication (Google)
 * @param {Firebase} firebase - firebase component 
 */
function authGoogle(firebase) {
  preAuth();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function() {
    postAuth(true);
  }).catch(function(err) {
    postAuth(false, err);
  })
}

/**
 * User Authentication (Facebook)
 * @param {Firebase} firebase - firebase component 
 */
function authFacebook(firebase) {
  preAuth();
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function() {
    postAuth(true);
  }).catch(function(err) {
    postAuth(false, err);
  })
}

// TODO: Wechat Authentication

/**
 * Helper function, no params
 * Simply disables the signin window to disable the main window
 */
function preAuth() {
  document.getElementById('main').className = `${styles.main} ${styles.main_busy}`;
}

/**
 * Helper function
 * @param {*} success - true if there were no error, otherwise false
 * @param {*} err - if error, what was it?
 */
function postAuth(success, err) {
  if (success) toast.success(`Authentication Success!`, {position: toast.POSITION.TOP_CENTER});
  else toast.warn(`Authentication Error! ${err}`, {position: toast.POSITION.TOP_CENTER});
  document.getElementById('main').className = `${styles.main}`;
}

function Login(props) {
  const version = props.lastUpdated;
  const firebase = props.fire;
  return (
    <div className={styles.container}>
      <div className={styles.container_upper}>
        <div id="main" className={styles.main}>
          <div className={styles.logo}>
            <img alt="" src={logo}></img>
          </div>
          <div className={styles.buttonContainer}>
            <div className={`${styles.button} ${styles.google_btn}`} onClick={() => authGoogle(firebase)}><img alt="" src={googleIcon}></img>谷歌登录</div>
            <div className={`${styles.button} ${styles.facebook_btn}`} onClick={() => authFacebook(firebase)}><img alt="" src={facebookIcon}></img>脸书登录</div>
            <div className={`${styles.button} ${styles.weixin_btn}`}><img alt="" src={weixinIcon}></img>微信登录</div>
          </div>
        </div>
      </div>
      <div className={styles.container_lower}>
          <div className={styles.item}>Version {version}</div>
          <div className={styles.item}>Brought to you by Brian & Jimmy</div>
      </div>
    </div>
  );
}

export default Login;
