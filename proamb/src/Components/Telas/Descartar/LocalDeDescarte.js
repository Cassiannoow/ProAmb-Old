import React, { Component } from "react";
import { GoogleMap } from "@react-google-maps/api";
import './LocalDeDescarte.css'

export default class LocalDeDescarte extends Component{
    state = {
        endereco: ''
      };

    render(){
    return(
        <div className="localdedescarte">
            <h1>{this.props.nome}</h1>
            <h6>coordenadas: {this.props.coordenadas.lat} , {this.props.coordenadas.lng}</h6>
        </div>
    )
    }
}