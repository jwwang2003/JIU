import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';

// Views (Webpages)
import { Login, Main } from './Views';

// Firebase libraries
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lastUpdated = "DEV";

var firebaseConfig = {
  apiKey: "AIzaSyDdsJkMYTP3zzBeFqbHYJ5Mv3ueKVftUy4",
  authDomain: "jiu-26817.firebaseapp.com",
  databaseURL: "https://jiu-26817.firebaseio.com",
  projectId: "jiu-26817",
  storageBucket: "jiu-26817.appspot.com",
  messagingSenderId: "664761226470",
  appId: "1:664761226470:web:4fdf9480abf6dacd4f5727",
  measurementId: "G-98J5Z7JTS1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

window.loadPromise = new Promise(resolve => {
  window.addEventListener(`DOMContentLoaded`, resolve)
})

window.loadPromise.then(() => console.log('DONE Loading DOM~'))

const signInWithGoogle = () => {
  document.getElementById('main').className = "main main-busy";
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function() {
    toast.success(`Authentication Success!`, {position: toast.POSITION.TOP_CENTER});
    document.getElementById('main').className = "main";
  }
  ).catch(err => {
    toast.warn(`Authentication Error! ${err}`, {position: toast.POSITION.TOP_CENTER});
    document.getElementById('main').className = "main";
  })
}

const signInWithFacebook = () => {
  document.getElementById('main').className = "main main-busy";
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).then(function() {
    toast.success(`Authentication Success!`, {position: toast.POSITION.TOP_CENTER});
    document.getElementById('main').className = "main";
  }
  ).catch(err => {
    toast.warn(`Authentication Error! ${err}`, {position: toast.POSITION.TOP_CENTER});
    document.getElementById('main').className = "main";
  })
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        {user ?
        <Redirect to={{ pathname: '/' }} /> :
        <Redirect to={ {pathname: '/login' }} />}
        <Switch>
          <Route path="/login">
            <Login
              lastUpdated={lastUpdated}
              signInWithGoogle={() => signInWithGoogle()}
              signInWithFacebook={() => signInWithFacebook()}
              ></Login>
          </Route>
          <ProtectedRoute exact={true} path="/" isAuthenticated={user} component={()=>
            <Hello class="YO" />}></ProtectedRoute>
        </Switch>
      </BrowserRouter>
      <ToastContainer hideProgressBar closeOnClick={false}/>
    </div>
  );
}

function Hello(props) {
  return(
    <div>
      <button onClick={() => { auth.signOut(); toast.info(`Logged out!`, { position: toast.POSITION.TOP_CENTER })}}>Logout</button>
    <h1>{props.class}</h1>
    </div>
    
  )
}

export default App;
