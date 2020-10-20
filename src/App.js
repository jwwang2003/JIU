import React from 'react';
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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const lastUpdated = "DEV";

var firebaseConfig = {
  apiKey: "AIzaSyD1_91Hn-8_BMIdkv75zkGCT0VtFYe5xFQ",
  authDomain: "jiuijiujiu.firebaseapp.com",
  databaseURL: "https://jiuijiujiu.firebaseio.com",
  projectId: "jiuijiujiu",
  storageBucket: "jiuijiujiu.appspot.com",
  messagingSenderId: "319949768473",
  appId: "1:319949768473:web:51af58b3975e56718b6788",
  measurementId: "G-K8VLV0RR4D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

window.loadPromise = new Promise(resolve => {
  console.time('loadDOM')
  window.addEventListener(`DOMContentLoaded`, resolve)
})
window.loadPromise.then(() => { 
  console.log('%cDone Loading DOM~', 'color: limegreen')
  console.timeEnd('loadDOM');
})

let coldStart = true;

console.time('checkAuth');
firebase.auth().onAuthStateChanged(function(user) {
  if (coldStart) {
    if (user) {
      console.log('%cPersisted user found', 'color: limegreen; font-weight: bold')
    } else {
      console.log('%cPersisted user not found', 'color: red; font-weight: bold');
    }
    document.getElementById("App").className = "App"
    console.log('%cCheck auth timer','color: orange' )
    console.timeEnd('checkAuth');
  }
  coldStart = false;
});

function App() {
  const [user] = useAuthState(auth);
  return (
    <div id="App" className="App Hide">
      <BrowserRouter>
        {user ?
        <Redirect to={{ pathname: '/' }} /> :
        <Redirect to={ {pathname: '/login' }} />}
        <Switch>
          <Route path="/login">
            <Login
              lastUpdated={lastUpdated}
              fire={firebase}
              ></Login>
          </Route>
          <ProtectedRoute exact={true} path="/" isAuthenticated={user} component={()=>
            <Main auth={auth} />}></ProtectedRoute>
        </Switch>
      </BrowserRouter>
      <ToastContainer hideProgressBar closeOnClick={false}/>
    </div>
  );
}

export default App;
