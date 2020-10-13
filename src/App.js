import React from 'react';
import './App.css';

import { Login } from './Views';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDmAe7v6VNHYRQatw4A8N2GLu0CY0GGb88",
  authDomain: "gomoku-e4b75.firebaseapp.com",
  databaseURL: "https://gomoku-e4b75.firebaseio.com",
  projectId: "gomoku-e4b75",
  storageBucket: "gomoku-e4b75.appspot.com",
  messagingSenderId: "820694270188",
  appId: "1:820694270188:web:0dace2d2a80664db71a5c9",
  measurementId: "G-WRJ1KJVC5M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const [user] = useAuthState(auth);
const electron = window.require('electron');
const { ipcRenderer } = electron;

const lastUpdated = "DEV";

const test = (t) => {
  console.log(1);
  ipcRenderer.send ('test', [t]);
}

const test2 = (t) => {
  console.log(3);
  ipcRenderer.send ('test2', [user]);
}

function App() {
  return (
    <div className="App">
      <Login
        lastUpdated={lastUpdated}
        test={(t)=>test(t)}
        test2={(t)=>test2(t)}></Login>
    </div>
  );
}

export default App;
