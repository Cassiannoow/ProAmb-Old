import React, { Component, useEffect } from "react";
import BarraDeBuscarLugar from "../../BarraDeBuscarLugar/BarraDeBuscarLugar";
import './Descartar.css';


export default class Descartar extends Component {
    render() {
        return (
            <article id="telaDescartar">
                <div>
                    <h2 id="tituloBuscar">Busque por endereço:</h2>
                    <BarraDeBuscarLugar />
                </div>
                <section className="buscar">
                    <button id="btnBuscarNoMapa"><b>Buscar no mapa</b></button>
                </section>

                <section className="lugares">
                        
                </section>
            </article>
        )
    }
}