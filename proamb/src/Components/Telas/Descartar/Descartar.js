import React, { Component, useEffect } from "react";
import BarraDeBuscarLugar from "../../BarraDeBuscarLugar/BarraDeBuscarLugar";
import './Descartar.css';
import { Navigate } from "react-router-dom";

export default class Descartar extends Component {
    handleMap =() => { 
        window.location.replace('/map')
    }
    render() {
        return (
            <div id="telaDescartar">
                <div className="barradebusca">
                    <h2 id="tituloBuscar">Busque por endereço:</h2>
                    <BarraDeBuscarLugar />
                </div>
                <div className="botoesDeBusca">
                    <button id="btnBuscarNoMapa" onClick={this.handleMap}>Buscar no mapa</button>
                    <h2 id="tituloBuscar">Filtrar por:</h2>
                    <div className="botoesLixos">
                        <button id="btnLixo">Lixo Orgânico</button>
                        <button id="btnLixo">Lixo Reciclável</button>
                        <button id="btnLixo">Lixo Químico</button>
                    </div>
                </div>
            </div>
        )
    }
}