import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import CreateBoard from "./components/CreateBoard";
import Instrucciones from "./components/Instrucciones";
import Sistema from "./components/Sistema";

import { config } from "./components/Firebase/firebase";

firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super();
    this.state = { view: 1, isLogged: true, mail: "" };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(numberView){
    if(numberView == 1) this.setState({view:1});
    else if(numberView == 2) this.setState({view:2});
    else if(numberView == 3) this.setState({view:3});
  }


  render() {
    return (
      <div>
        {this.state.view == 1 ? (
          <CreateBoard toggleView = {this.toggleView}/>
        ) : (
          this.state.view == 2 ? (
            <Instrucciones toggleView = {this.toggleView}/>
          ) : (
            <Sistema />
          )
        )}
      </div>
    );
  }
}

export default App;
