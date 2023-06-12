import React from "react";
import './CardsAprender.css'

export default function CardsAprender(props) {
    return (
        <div className="cardAprender">
            <span id="titulos"><b>{ props.titulo }</b></span>
            <div className="imagemAprender">
                <img className="imagensCard" src={props.imagem}></img>
            </div>
            <button className="comecar"><b>COMEÇAR</b></button>
        </div>
    )
}