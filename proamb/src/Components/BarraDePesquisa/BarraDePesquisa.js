import React from "react";
import Lupa from '../../assets/img/icons/lupa.png';
import './BarraDePesquisa.css'

export default function BarraDePesquisa() {
    return (
        <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar"/>
            <img src={Lupa} id="btnBusca" alt="Buscar"/>
        </div>
    )
}