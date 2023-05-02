import "./Home.css";
import React from "react";
import MenuVertical from "../../MenuVertical/MenuVertical";
import Background from "../../../assets/img/Fotos/TelaDeFundo.png"

export default function Home()
{
    return (
        <article>
            <img src={Background} alt="background" className="background" />
            
            <section id="intro">
                <div className="card">
                    <div className="texto">
                        <h3>NADA É MAIOR DO QUE A PAZ QUE A NATUREZA TE POSSIBILITA</h3>
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
        </article>
    )
}