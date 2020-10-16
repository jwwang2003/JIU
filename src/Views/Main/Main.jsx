import React, { Component } from 'react';
import './Main.css';

import { Navbar } from '../../Components'

class Main extends Component {
  render() {
    const auth = this.props.auth;
    const { uid, photoURL } = auth.currentUser;
    return (
      <div className="main-container">
        <div className="navbar">
        <Navbar photoURL={photoURL} photo4={photoURL}/>
        </div>
        <div className="content">
          <button onClick={() => auth.signOut()}>Loggout</button>
        </div>
      </div>
    )
  }
}

export default Main;