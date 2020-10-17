import React, { Component } from 'react';
import styles from './Main.module.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Navbar } from '../../Components'

class Main extends Component {
  render() {
    const auth = this.props.auth;
    const { /*uid, */ photoURL } = auth.currentUser;
    return (
      <div className={styles.main_container}>
        <BrowserRouter>
          <div className={styles.navbar}>
            <Navbar
            photoURL={photoURL}
            handleSignOut={() => auth.signOut()}/>
          </div>
          <Redirect to={{pathname: '/recents'}} />
          <div className={styles.content}>
            <Switch>
              <Route path="/recents">
                <Recents />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/friends">
                <Friends />
              </Route>
              <Route path="/myself">
                <Myself />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

function Recents() {
  return (
    <div>
      This is recents
    </div>
  )
}

function Chat() {
  return (
    <div>
      This is chat
    </div>
  )
}

function Friends() {
  return (
    <div>
      This is friends
    </div>
  )
}

function Myself() {
  return (
    <div>
      This is myself
    </div>
  )
}

function Settings() {
  return (
    <div>
      This is settings
    </div>
  )
}


export default Main;