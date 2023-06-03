import React, { useEffect, useState } from "react"
import axios from "axios"
import './PostsCompletos.css'
import { useParams } from "react-router-dom"
import BarraDeComentario from "../../../BarraDeComentario/BarraDeComentario"
import AuthService from "../../../../services/AuthService"
const urlAPI = 'http://localhost:5006/api/'

function apagarComentario(idComentario){
    axios.delete(urlAPI + "comentarios/" + idComentario).then(resp =>{
        window.location.reload()
    })
}

export default function PostsCompletos(){
    const [usuario, setUsuario] = useState({user: {id:0,username:"",foto:""}, lista: []})
    const [comentarios, setComentarios] = useState({comentario: {id: 0, idPost: 0, idUsuario: 0, conteudo:''}, listaComentarios: []})
    const [posts, setPosts] = useState({id:0, idUsuario:0, imagem:"", conteudo:""})
    const info = useParams()
    const userAtual = AuthService.getCurrentUser()

    useEffect(() => {
        axios(urlAPI + "posts/" + info.id).then(resp =>{
            setPosts(resp.data)
        })
        axios(urlAPI+ 'comentarios/bypost/' + info.id).then(resp => {
            setComentarios({listaComentarios: resp.data})
        })
        axios(urlAPI + 'Usuarios').then(resp => {
            setUsuario({ lista: resp.data })
        })
    }, [])

    return (
        <div>
            <div className="posts">
                <div className="Artigo">
                    <img id="imagemArtigo" src={posts.imagem}/*"https://surfguru.space/2018/09/180903100345000000.jpg"*/ alt="tartaruga" />
                    <br/>
                    <div className="conteudo">
                        <span><b>{posts.conteudo}</b></span>
                    </div>
                </div>

                <section className="comentarios">
                    {
                        comentarios.listaComentarios.map( 
                            (comentario) =>
                            {
                                return(
                                <div className="comentar" id="cardComentarios" key={comentario.id}>
                                    {usuario.lista.map(
                                        (user) => 
                                        {
                                            if(comentario.idUsuario == user.id)
                                            {
                                                return(
                                                <div className="comentarioIndividual">
                                                    <img id="fotoUsuario" src={user.foto} />
                                                    <div className="dados">
                                                        <div className="nome">
                                                        <h2>{user.username}
                                                        {userAtual.user.id == comentario.idUsuario ? <button onClick={e => apagarComentario(comentario.id)}>Delete</button>: <></>}</h2> 
                                                        </div>
                                                        <p className="mensagem">{comentario.conteudo}</p>
                                                    </div>
                                                </div>
                                                )
                                            }
                                        }
                                    )}
                                    <br/>
                                </div>
                                )
                            }
                                
                        )}
                </section>
            </div>
            {
                userAtual ?
                <BarraDeComentario className="as"/>
                : <></>
            }
        </div>
            
            
    )
}
