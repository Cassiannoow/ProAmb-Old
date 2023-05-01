import "./Home.css";
import React from "react";
import MenuVertical from "../MenuVertical/MenuVertical";

export default function Home()
{
    return (
        <>
            <section id="intro">
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
                </div>
            </section>
            <section id="menuVertical">
                <div className="menuVertical">
                    <MenuVertical />
                </div>
            </section>
        </>
    )
}