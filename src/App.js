import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import CreateBoard from "./components/CreateBoard";

import { config } from "./components/Firebase/firebase";

firebase.initializeApp(config);

function App() {
  return (
    <CreateBoard/>
  );
}

export default App;
