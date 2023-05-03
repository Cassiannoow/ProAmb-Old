import React from "react";
import './CardsAprender.css'

export default function CardsAprender(props) {
    return (
        <div className="cardAprender">
            <span id="titulos"><b>{ props.titulo }</b></span>
            <div className="imagemAprender">
            </div>
            <button className="comecar"><b>COMEÇAR</b></button>
        </div>
    )
}