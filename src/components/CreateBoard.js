import React, { Component } from "react";
import * as firebase from "firebase";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
var QRCode = require('qrcode.react');


class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null,
      boardId: ""
    };
    this.makeid = this.makeid.bind(this);
    this.createNewBoard = this.createNewBoard.bind(this);

  }

  async createNewBoard(length){
    //Randomiza código de tablero
    var boardId= await this.makeid(length);
    //Lo crea en firebase

    firebase.database().ref('Tableros/' + this.state.boardId).update({
        timestamp: Date.now(),
        jugadores: 0
      });


  }

  async makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   //this.setState({boardId: result});
   this.setState({boardId: "testing"});
}





  componentDidMount() {
    this.createNewBoard(10);
  }

  render() {

        return (
          <div>
          <div>
             Crea tu propio sistema solar con System cookin'!

          </div>
          <div>
             <QRCode value={this.state.boardId} />
          </div>
          <div>
             {this.state.boardId}
          </div>
          </div>
        );

    }
  }


export default CreateBoard;
