import React from "react";
import './Forum.css';
import BarraDeComentario from '../../BarraDeComentario/BarraDeComentario'

export default function Forum() {
    return (
        <article id="telaForum">
            <section className="artigo">
                <div className="temaArtigo">
                    <img id="imagemArtigo" src="https://surfguru.space/2018/09/180903100345000000.jpg"/>
                    <br/>
                    <span><b>Discussão: Descarte de materiais nos oceanos</b></span>
                    <div className="comenteAqui">
                        <BarraDeComentario />
                    </div>
                </div>
            </section>

            <section className="comentarios">
                <div className="comentar" id="cardComentarios">
                    <div className="imagem">
                    </div>
                    <div className="informacoes">
                        <div className="pessoais">
                        </div>
                        <div className="mensagem">
                            
                        </div>
                    </div> <br/>

                    <div className="imagem">
                    </div>
                    <div className="informacoes">
                        <div className="pessoais">

                        </div>
                    </div> <br/>

                    <div className="imagem">
                    </div>
                    <div className="informacoes">
                        <div className="pessoais">

                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}