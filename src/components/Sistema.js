import React, { Component } from "react";
import * as firebase from "firebase";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


class Sistema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipoEstrella:"polvoEstelar.png",
      planetas:{},
      glosa:""
    };
    //this.makeid = this.makeid.bind(this);
    this.mostrarEstrella = this.mostrarEstrella.bind(this);
    this.mostrarPlaneta = this.mostrarPlaneta.bind(this);
    this.listenToStarTemperature = this.listenToStarTemperature.bind(this);
    
  }
mostrarEstrella(tipoEstrella){
  if (tipoEstrella==1){
    this.setState({tipoEstrella:"estrellaRoja.png"})
  }
  else if (tipoEstrella==2){
    this.setState({tipoEstrella:"estrellaAmarilla.png"})
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


listenToStarTemperature(){
  var that = this;
  firebase.database().ref('Estrellas/' + "testing").on("value", function(snapshot) {
    var tipoEstrella = snapshot.val().tipo;
    console.log(tipoEstrella);
    that.mostrarEstrella(tipoEstrella);
  }, function (errorObject) {
  });
}




  componentDidMount() {
    this.listenToStarTemperature();
  }

  render() {
    let imgUrl = 'fondoEstelar.jpg';

        return (
          <div style = {{ backgroundImage: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: "100vh"
              }}>

              <img src={this.state.tipoEstrella} style = {{
                position:"absolute",
  width: "30vh",
  right: "40vw",
  height: "30vh",
  top: "40vh",
                  }} />



          </div>
        );

    }
  }


export default Sistema;
