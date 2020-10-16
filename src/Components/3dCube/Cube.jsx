import React, { Component } from 'react';
import styles from './Cube.module.css';

class Cube extends Component {

  render() {
    return (
      <div className={styles.stage}>
        <div className={styles.spinner}>
          <div className={styles.face1}><img src={this.props.photo1} alt=""></img></div>
          <div className={styles.face2}><img src={this.props.photo2} alt=""></img></div>
          <div className={styles.face3}><img src={this.props.photo3} alt=""></img></div>
          <div className={styles.face4}><img src={this.props.photo4} alt=""></img></div>
          <div className={styles.face5}><img src={this.props.photo5} alt=""></img></div>
          <div className={styles.face6}><img src={this.props.photo6} alt=""></img></div>
        </div>
      </div>
    )
  }
}

export default Cube;