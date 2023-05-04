import React, { Component, useEffect } from "react"
import axios from "axios"

const urlAPI = 'http://localhost:5006/api/'

const initialState = {
    post: {id:0, idUsuario:0, imagem:"", conteudo:""},
    comentario: {id: 0, idPost: 0, idUsuario: 0, conteudo:''},
    comentarios: []
}

export default class Post extends Component {
    state = { ...initialState }

    componentDidMount () {
        axios(urlAPI + 'posts/' + this.props.idPost).then(resp => {
            this.setState({post: resp.data})
        })
        axios(urlAPI+ 'comentarios/' + this.props.idPost).then(resp => {
            this.setState({lista: resp.data})
        })
    }

    render () {
        <div className="post">
            <section className="artigo">
                    <div className="temaArtigo">
                        <img id="imagemArtigo" src={post.imagem}/*"https://surfguru.space/2018/09/180903100345000000.jpg"*/ alt="tartaruga" />
                        <br/>
                        <span><b>{post.conteudo}</b></span>
                        <div className="comenteAqui">
                            <BarraDeComentario />
                        </div>
                    </div>
                </section>

                <section className="comentarios">
                    {this.state.comentarios.map( 
                        (comentario) => {
                            <div className="comentar" id="cardComentarios">
                                <div className="imagem">
                                    <img src={comentario.imagem} alt="imagem" />
                                </div>
                                <div className="informacoes">
                                    <div className="pessoais">
                                        {comentario.idUsuario}
                                    </div>
                                    <div className="mensagem">
                                        {comentario.conteudo}
                                    </div>
                                </div> <br/>
                            </div>
                        })}
                </section>
            </div>
    }
}