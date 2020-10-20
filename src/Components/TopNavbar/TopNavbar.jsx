import React, { Component } from 'react';
import styles from './TopNavbar.module.css';

class TopNavbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.options}>

        </div>
        
        <div className={styles.profilePic}>
          <img src={this.props.photoURL} alt=""></img>
        </div>
      </div>
    )
  }
}

export default TopNavbar;