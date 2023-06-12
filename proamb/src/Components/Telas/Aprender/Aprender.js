import React from "react";
import './Aprender.css';
import CardsAprender from '../../CardsAprender/CardsAprender'
import img1 from '../../../assets/img/Ilustrations/image 11.png'
import img2 from '../../../assets/img/Ilustrations/image 12.png'
import img3 from '../../../assets/img/Ilustrations/image 13.png'


export default function Aprender()
{
    return (
        <div className="App">
            <div className="organizarCards">
                <CardsAprender titulo="A importância da RECICLAGEM" imagem={img1}/>
                <CardsAprender titulo="A Arte e o Plástico" imagem={img2}/>
                <CardsAprender titulo="Como Descartar o Vidro" imagem={img3}/>
            </div>
        </div>
    )
}