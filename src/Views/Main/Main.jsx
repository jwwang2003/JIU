import React, { Component } from 'react';

class Main extends Component {
  render() {
    const auth = this.props.auth;
    const { uid, photoURL } = auth.currentUser;
    return (
      <div>
        <img src={photoURL}></img>
        <button onClick={() => auth.signOut()}>Loggout</button>
      </div>
    )
  }
}

export default Main;