import React from 'react';
import styles from './Login.module.css';

import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

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
// <img alt="" src={logo}></img>
function Login(props) {
  const version = props.lastUpdated;
  const firebase = props.fire;
  return (
    <div className={styles.container}>
      <div className={styles.container_upper}>
        <div id="main" className={styles.main}>
          
          
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <div className={styles.buttons}>
                  <div className={`${styles.button} ${styles.google_btn}`} onClick={() => authGoogle(firebase)}><img alt="" src={googleIcon}></img>谷歌</div>
                  <div className={`${styles.button} ${styles.facebook_btn}`} onClick={() => authFacebook(firebase)}><img alt="" src={facebookIcon}></img>脸书</div>
                  <div className={`${styles.button} ${styles.weixin_btn}`}><img alt="" src={weixinIcon}></img>微信</div>
                </div>
                <div className={styles.inputs}>
                  <input type="username" placeholder={"用户名"}></input>
                  <input type="password" placeholder={"密码"}></input>
                  <div className={styles.minorText}><Link to="/register">邮件注册</Link></div>
                </div>
                
                <div className={`${styles.button}`}>登录</div>
                <div className={styles.minorText}><Link to="/recover">忘记密码</Link></div>
              </Route>
              <Route path="/register">
                <div className={styles.inputs}>
                  <input type="username" placeholder={"全名"}></input>
                  <input type="username" placeholder={"用户名"}></input>
                  <input type="username" placeholder={"邮件"}></input>
                  <input type="password" placeholder={"密码"}></input>
                  <input type="password" placeholder={"重复密码"}></input>
                  <div className={styles.minorText}><Link to="/login">邮件登录</Link></div>
                </div>
                
                <div className={`${styles.button}`}>注册</div>
              </Route>
              <Route path="/recover">
                <div className={styles.minorText2}><Link to="/login">回去</Link></div>
                <input type="username" placeholder={"邮件"}></input>
                <div className={`${styles.button}`}>找回密码</div>
              </Route>
            </Switch>
          </BrowserRouter>
          
        </div>
      </div>
      <div className={styles.container_lower}>
          <div className={`${styles.item}`}><Language /></div>
          <div className={`${styles.item} ${styles.language}`}>EN</div>
          <div className={`${styles.item} ${styles.language}`}>CN</div>
          <div className={styles.item}>Version {version}</div>
      </div>
    </div>
  );
}

function Language() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
        d="M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4c.96 1.66 2.49 2.93 4.33 3.56-.6-1.11-1.06-2.31-1.38-3.56H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8c-.96-1.65-2.49-2.93-4.33-3.56.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4c1.84-.63 3.37-1.91 4.33-3.56h-2.95c-.32 1.25-.78 2.45-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z"
        opacity=".3" />
    <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
    </svg>
  )
}

export default Login;
