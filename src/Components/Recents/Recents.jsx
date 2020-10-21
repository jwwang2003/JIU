import React from 'react';
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

function Recents(props) {
    const arr = [p1, p2, p3, p4, p5, p6, p7];
    const arr1 = [p1,p2, p8, p9];
    return (
      <div className={styles.container}>
        <Post
          id={"1"}
          profile={props.IMG}
          timestamp={"2020.20"}
          media={arr}
          mediaSize={arr.length}
          text={<><h1>Jimmy </h1></>}/>
        <Post
          id={"2"}
          profile={props.IMG}
          timestamp={"2020.20"}
          media={arr1}
          mediaSize={arr1.length}
          text={<><h1>Jimmy </h1><h1>Jimmy </h1><h1>Jimmy </h1><h1>Jimmy </h1><h1>Jimmy </h1></>}/>
      </div>
    )
}

export default Recents;