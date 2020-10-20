import React, { Component } from 'react';
import styles from './Recents.module.css';

import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import p4 from './p4.jpeg';
import p5 from './p5.jpeg';
import p6 from './p6.jpeg';
import p7 from './p7.jpeg';
import p8 from './p8.jpeg';
import p9 from './p9.jpeg';

import Post from '../Post/Post';

class Recents extends Component {
  render() {
    const arr = [];
    return (
      <div className={styles.container}>
        <Post
          IMG={this.props.IMG}
          postedAt={"2020.20"}
          arr={arr}
          num={arr.length}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
        <Post IMG={this.props.IMG}/>
      </div>
    )
  }
}

export default Recents;