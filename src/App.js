import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import CreateBoard from "./components/CreateBoard";

import { config } from "./components/Firebase/firebase";

firebase.initializeApp(config);

global.view = 1;

function App() {
  if(global.view == 1){
    return (
      <CreateBoard/>
    );
  }
  else if(global.view == 2){
    return (
      <CreateBoard/>
    );
  }
  else if(global.view == 3){
    return (
      <CreateBoard/>
    );
  }
}

export default App;
