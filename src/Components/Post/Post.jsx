import React from 'react';
import { Component } from 'react';
import styles from './Post.module.css';

class Post extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // Initial setup
    const mediaSize = this.props.mediaSize;
    this.init(mediaSize);
  }

  init(num) {
    document.getElementById(`content-${this.props.id}`).className = `${styles.content} ${styles.nope}`
    if (num === 1) document.getElementById(`media-${this.props.id}`).className = `${styles.media} ${styles.test}`
    else if (num === 2) document.getElementById(`media-${this.props.id}`).className = `${styles.media} ${styles.test2}`
    else if (num === 3 || num === 4) document.getElementById(`media-${this.props.id}`).className = `${styles.media} ${styles.test3}`
    else if (num < 4) document.getElementById(`media-${this.props.id}`).className = `${styles.media} ${styles.test4}`
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <img src={this.props.profile} alt=""></img>
          <div className={styles.timestamp}>{this.props.timestamp}</div>
          <Expand />
        </div>
        <div id={`content-${this.props.id}`} className={styles.content}>
          <div className={styles.left}>
            {this.props.text}
          </div>
          <div id={`media-${this.props.id}`} className={styles.media}>
            {this.props.media && this.props.media.map((media) => <Image src={media} />)}
          </div>
        </div>
      </div>
    )
  }
}

function Image(props) {
  return (
    <img src={props.src} alt=""></img>
    
  )
}

// function Video(props) {
//   return (
//     <video><source src={props.src}></source></video>
//   )
// }

function Expand() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
  )
}

export default Post;