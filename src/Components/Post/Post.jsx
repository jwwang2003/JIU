import React from 'react';
import { Component } from 'react';
import styles from './Post.module.css';

class Post extends Component {
  
}

function Post(props) {
 
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <img src={props.IMG} alt=""></img>
        <div className={styles.item}>{props.postedAt}</div>
        <MoreOptions />
      </div>
      <div id="main" className={styles.content}>
        <div className={styles.left}>
          
        </div>
        <div id="test" className={styles.right} onLoad={() => test(props.num)}>
          {props.arr && props.arr.map(msg => <Test key={msg.id} img={msg} />)}
        </div>
      </div>
    </div>
  )
}

function test(num) {
  document.getElementById('main').className = `${styles.content} ${styles.nope}`
  if (num === 1) {
    document.getElementById('test').className = `${styles.right} ${styles.test}`
  }
  else if (num === 2) {
    document.getElementById('test').className = `${styles.right} ${styles.test2}`
  }
  else if (num === 3 || num === 4) {
    document.getElementById('test').className = `${styles.right} ${styles.test3}`
  }
  else if (num <= 5) {
    document.getElementById('test').className = `${styles.right} ${styles.test4}`
  }
  else {
    document.getElementById('main').className = `${styles.content} ${styles.nope}`
  }
}

function Test(props) {
  return (
    <img src={props.img}></img>
  )
}

function MoreOptions() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
  )
}

export default Post;