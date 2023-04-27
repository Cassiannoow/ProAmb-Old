import "./Home.css";
import React from "react";
import Header from "../Templates/Header";
import Background from "../../assets/img/Fotos/Fundo_Home.jpg"

export default function Home()
{
    return (
        <>
            <Header />
            <div className="card">
                <div className="texto">
                    <p>NADA É MAIOR DO QUE A PAZ QUE A NATUREZA TE POSSIBILITA</p>
                    <span>
                        Somos a ProAmb, um aplicativo disposto a ajudar aqueles que querem aprender
                        um pouco mais sobre a natureza, a reciclagem e o descarte correto de lixo!
                    </span> <br/> <br/>
                    <span>
                        Por meio do aplicativo você poderá visualizar quais pontos de coleta existem
                        perto da sua casa e ainda interagir com outros pessoas que também se interessam
                        pelo assunto!
                    </span>
                </div>
                <div className="coisas fofas">
                </div>
            </div>
        </>
    )
}