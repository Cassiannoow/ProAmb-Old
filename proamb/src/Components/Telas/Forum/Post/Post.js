import React, { Component, useEffect } from "react"
import axios from "axios"
import BarraDeComentario from '../../../BarraDeComentario/BarraDeComentario'
import './Post.css'

const urlAPI = 'http://localhost:5006/api/'

const initialState = {
    comentario: {id: 0, idPost: 0, idUsuario: 0, conteudo:''},
    comentarios: [],
    usuario: {id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:"" },
    lista: []
}

export default class Post extends Component {
    state = { ...initialState }

    componentDidMount () {
        axios(urlAPI+ 'comentarios').then(resp => {
            this.setState({comentarios: resp.data})
        })
        axios(urlAPI + 'usuarios').then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    render () { return(
        <div className="post">
                <section className="artigo">
                    <div className="temaArtigo">
                        <img id="imagemArtigo" src={this.props.imagem}/*"https://surfguru.space/2018/09/180903100345000000.jpg"*/ alt="tartaruga" />
                        <br/>
                        <span><b>{this.props.conteudo}</b></span>
                        <div className="comenteAqui">
                            <BarraDeComentario />
                        </div>
                    </div>
                </section>

                <section className="comentarios">
                    {this.state.comentarios.map( 
                        (comentario) =>
                        {
                            if(this.props.idPost == comentario.idPost)
                            {
                                return(
                                <div className="comentar" id="cardComentarios">
                                    {this.state.lista.map(
                                        (usuarios) => 
                                        {
                                            if(comentario.idUsuario == usuarios.id)
                                            {
                                                return(
                                                    <div className="comentarioIndividual">
                                                        <img id="fotoUsuario" src={usuarios.foto} />
                                                        <div className="dados">
                                                            <h2>{usuarios.username}</h2>
                                                            <p className="mensagem">{comentario.conteudo}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                    )}
                                    <br/>
                                </div>)
                            }
                        }
                            
                    )}
                </section>
            </div>)
    }
}