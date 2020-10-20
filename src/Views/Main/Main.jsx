import React, { Component } from 'react';
import styles from './Main.module.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Navbar, TopNavbar} from '../../Components'
import { Recents, Chat, Friends, Myself, Settings} from '../../Components';

class Main extends Component {

  render() {
    const auth = this.props.auth;
    const { /*uid, */ photoURL } = auth.currentUser;
    
    return (
      <div className={styles.main_container}>
        <BrowserRouter>
          <div className={styles.navbar}>
            <Navbar
            handleSignOut={() => auth.signOut()}/>
          </div>
          <Redirect to={{pathname: '/recents'}} />
          <div className={styles.content}>
            <div className={styles.topNavbar}>
              <TopNavbar photoURL={photoURL}/>
            </div>
            <div className={styles._content}>
              <Switch>
                <Route path="/recents">
                  <Recents IMG={photoURL}/>
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
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Main;