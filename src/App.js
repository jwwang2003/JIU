import React from 'react';
import './App.css';

import { Login } from './Views';

// const electron = window.require('electron');
// const { ipcRenderer } = electron;

const lastUpdated = "DEV";

function App() {
  return (
    <div className="App">
      <Login lastUpdated={lastUpdated}></Login>
    </div>
  );
}

export default App;
