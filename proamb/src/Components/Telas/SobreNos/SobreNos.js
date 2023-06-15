import React from "react";
import './SobreNos.css'

export default function SobreNos() {
    return(
        <div className="div-sobre-nos">
            <h1>Sobre Nós</h1>
            <p className="paragrafo">
                Nos somos alunos do cotuca, e este é um pequeno projeto da materia de praticas profissionais,<br/>
                o intuito do site é ajudar pessoas a conhecerem mais sobre a natureza e a reciclagem,<br/> 
                o site contem uma aba para forum onde os usuarios podem interagir entre si.
            </p>
  
            <h2>Agradecimento</h2>
            <p className="paragrafo">Gostaríamos de agradecer a todos pelo apoio e interesse em conhecer um pouco mais sobre nós.</p>
            
            <h2>Nomes</h2>
            <ul className="listaNomes">
                <li>Maria Eduarda Padovan</li>
                <li>Hugo Gomes Soares</li>
                <li>João Pedro Cassiano</li>
            </ul>
        </div>
    )
}