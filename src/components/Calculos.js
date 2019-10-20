import React, { Component } from "react";
import * as firebase from "firebase";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
var QRCode = require('qrcode.react');


class Calculos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //places: null,
    };
    //this.makeid = this.makeid.bind(this);


  }
calcularOrbita(masaEstrella,masaPlaneta,periodo,distancia){
  const G=6.674*(10^-11)
  var fuerzaGravedad=G*masaPlaneta*masaEstrella*((1.989*10^30)^2)/((distancia*(149.6*10^9))^2)//masaPlaneta y masaEstrella estan en masas solares, distancia esta en UA
  var omega=2*Pi/(periodo*24*60*60)
  var fuerzaCentrifuga=masaPlaneta*(1.989*10^30)*(omega^2)*distancia*(149.6*10^9)
  if (fuerzaGravedad*0.95<fuerzaCentrifuga && fuerzaCentrifuga<fuerzaGravedad*1.05){
    return 0
  }
  else if (fuerzaGravedad>fuerzaCentrifuga) {
    return -1
  }
  else if (fuerzaGravedad<fuerzaCentrifuga) {
    return 1
  }
}
calcularHZ(luminosidadEstrella,distanciaTierra,temperaturaEstrella){
  var bc=0
  if (temperaturaEstrella<3500) {
    bc=-2
  }
  else if (temperaturaEstrella<5000) {
    bc=-0.8
  }
  else if (temperaturaEstrella<6000) {
    bc=-0.4
  }
  else if (temperaturaEstrella<7500) {
    bc=-0.15
  }
  else if (temperaturaEstrella<11000) {
    bc=-0.3
  }
  else if (temperaturaEstrella<28000) {
    bc=-2
  }
  var magnitudAbsoluta=luminosidadEstrella - 5* Math.log10(distancia/10)
  var mBol=luminosidadAbsoluta + bc
  var luminosidadAbsoluta=10^((mBol-4.72)/-2.5)
  var rI= Sqrt(luminosidadAbsoluta/1.1)
  var rO= Sqrt(luminosidadAbsoluta/0.53)
}
  /*async createNewBoard(length){
    //Randomiza código de tablero
    var boardId= await this.makeid(length);
    //Lo crea en firebase

    firebase.database().ref('Tableros/' + this.state.boardId).update({
        timestamp: Date.now(),
        jugadores: 0
      });


  }*/

  componentDidMount() {
    //this.createNewBoard(10);
  }

  /*render() {

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

    }*/
  }


export default Calculos;
