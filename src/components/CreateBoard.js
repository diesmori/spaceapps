import React, { Component } from "react";
//import {createBoard} from "../styles/createBoard";
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
    this.listenToPlayers = this.listenToPlayers.bind(this);

  }

  async createNewBoard(length){
    //Randomiza código de tablero
    var boardId= await this.makeid(length);
    //Lo crea en firebase

    firebase.database().ref('Tableros/' + this.state.boardId).update({
        timestamp: Date.now(),
        jugadores: 0,
        hasPlayers: false,
        readyToStart:false
      });
      this.listenToPlayers();


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

  listenToPlayers(){
    var that = this;
    firebase.database().ref('Tableros/' + this.state.boardId).on("value", function(snapshot) {
      if(snapshot.val().hasPlayers) that.props.toggleView(2);
    }, function (errorObject) {
    });
  }





  componentDidMount() {
    this.createNewBoard(10);
  }

  render() {
    let imgUrl = 'vista1.jpg';

        return (
          <div style = {{ backgroundImage: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: "100vh"
              }}>

                <div>
                  <QRCode value={this.state.boardId} style={{position:"absolute",
    width: "30vh",
    right: "20vw",
    height: "30vh",
    top: "50vh"}} />
                </div>
                <div style={{position:"absolute",
  width: "30vh",
  right: "20vw",
  height: "30vh",
  top: "85vh",
fontSize: "5vh"}}>
                  {this.state.boardId}
                </div>

          </div>
        );

    }
  }


export default CreateBoard;
