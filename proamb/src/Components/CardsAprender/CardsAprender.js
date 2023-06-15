import React from "react";
import './CardsAprender.css'
import { useNavigate } from "react-router-dom";

export default function CardsAprender(props) {

    const Navigate = useNavigate();

    return (
        <div className="cardAprender">
            <span id="titulos"><b>{ props.titulo }</b></span>
            <div className="imagemAprender">
                <img className="imagensCard" src={props.imagem}></img>
            </div>
            <button className="comecar" onClick={e => Navigate(`/post/${props.id}`)}><b>COMEÇAR</b></button>
        </div>
    )
}