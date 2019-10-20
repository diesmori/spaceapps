import React, { Component } from "react";
import * as firebase from "firebase";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
var QRCode = require('qrcode.react');


class Sistema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipoEstrella:"polvoEstelar.png",
      planetas:{},
      glosa:""
    };
    //this.makeid = this.makeid.bind(this);
mostrarEstrella(tipoEstrella){
  if (tipoEstrella==1){
    this.setState({tipoEstrella:"estrellaRoja.png"})
  }
  else if (tipoEstrella==2){
    this.setState({tipoEstrella:"estrellaBlanca.png"})
  }
  else if (tipoEstrella==3){
    this.setState({tipoEstrella:"estrellaAzul.png"})
  }
}
mostrarPlaneta(tipoOrbita,nombrePlaneta){
  if (tipoOrbita==-1) {
    this.setState({glosa:"Lamentablemente el planeta "+nombrePlaneta+" fue absorbido por la estrella.",
  imagenPlaneta:"nombrePlaneta.png"});
  }
  else if (tipoOrbita==0) {
    this.setState({glosa:"Felicitaciones!! el planeta "+nombrePlaneta+" ha quedado en orbita"});
  }
  else if (tipoOrbita==1) {
    this.setState({glosa:"Lamentablemente el planeta "+nombrePlaneta+" salió de orbita."});
  }

}




  componentDidMount() {

  }

  render() {

        return (
          <div>

          </div>
        );

    }
  }


export default Sistema;
