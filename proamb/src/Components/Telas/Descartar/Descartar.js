import React, { Component, useEffect } from "react";
import BarraDeBuscarLugar from "../../BarraDeBuscarLugar/BarraDeBuscarLugar";
import './Descartar.css';


export default class Descartar extends Component {
    render() {
        return (
            <div id="telaDescartar">
                <div className="barradebusca">
                    <h2 id="tituloBuscar">Busque por endereço:</h2>
                    <BarraDeBuscarLugar />
                </div>
                <div className="botoesDeBusca">
                    <button id="btnBuscarNoMapa"><b>Buscar no mapa</b></button>
                    <h2 id="tituloBuscar">Filtrar por:</h2>
                    <div className="botoesLixos">
                        <button id="btnBuscarNoMapa"><b>Lixo Orgânico</b></button>
                        <button id="btnBuscarNoMapa"><b>Lixo Reciclável</b></button>
                        <button id="btnBuscarNoMapa"><b>Lixo Químico</b></button>
                    </div>
                </div>
            </div>
        )
    }
}