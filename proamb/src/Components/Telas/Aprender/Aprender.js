import React from "react";
import './Aprender.css';
import CardsAprender from '../../CardsAprender/CardsAprender'

export default function Aprender()
{
    return (
        <div className="App">
            <div className="organizarCards">
                <CardsAprender titulo="TÍTULO 1"/>
                <CardsAprender titulo="TÍTULO 2"/>
                <CardsAprender titulo="TÍTULO 3"/>
            </div>
        </div>
    )
}