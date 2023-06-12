import React from "react";
import './Aprender.css';
import CardsAprender from '../../CardsAprender/CardsAprender'

export default function Aprender()
{
    return (
        <div className="App">
            <div className="organizarCards">
                <CardsAprender titulo="A importância da RECICLAGEM"/>
                <CardsAprender titulo="A Arte e o Plástico"/>
                <CardsAprender titulo="Como Descartar o Vidro"/>
            </div>
        </div>
    )
}