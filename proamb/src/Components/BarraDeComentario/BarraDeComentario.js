import axios from "axios";
import React from "react";
import './BarraDeComentario.css'
import AuthService from "../../services/AuthService";
import { useParams } from "react-router-dom";

const urlAPI = 'http://localhost:5006/api/comentarios/'
const userI = AuthService.getCurrentUser()
var info = null

function inserirComentario() {
    let idUsuario = userI.user.id
    let conteudo = document.querySelector('input#txtComentario').value
    let idPost = info.id

    axios.post(urlAPI , {
        conteudo,
        idUsuario,
        idPost
    }).then((response) => {
        window.location.reload()
    })
}

export default function BarraDeComentario() {
    info = useParams()
    return (
        <div id="divComentario">
            <input type="text" id="txtComentario" placeholder="Comente Aqui"/>
            <button className="confirmar-criacao-comentario" onClick={e => inserirComentario()}>Enviar</button>
        </div>
    )
}