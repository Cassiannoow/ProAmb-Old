import React, { Component, useEffect } from "react";
import './Forum.css';
import Post from './Post/Post'
import axios from "axios";
import AuthService from "../../../services/AuthService";

const urlAPI = 'http://localhost:5006/api/posts/'

const initialState = {
    post: {id:0, idUsuario:0, imagem:"", conteudo:""},
    posts: [],
    criandoPost: false,
    user: {user : {id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}}
}

export default class Forum extends Component {
    state = { ...initialState }

    componentDidMount() {
        this.setState({user : AuthService.getCurrentUser()})
        axios(urlAPI).then(resp => {
            this.setState({ posts: resp.data})
        })   
    }

    handleClickbtn() {
        this.setState({criandoPost: true})
        console.log(this.state)
    }

    mudarEstado() {
        this.setState({criandoPost : false})
    }

    inserirPost() {
        let imagem = document.querySelector('input#imagem').value
        console.log(imagem)
        let conteudo = document.querySelector('textarea#conteudo').value
        console.log(conteudo)

        let idUsuario = Number(this.state.user.user.id)
        console.log(idUsuario)

        axios.post(urlAPI , {
            imagem,
            conteudo,
            idUsuario
        }).then((response) => {
            console.log('response:' + JSON.stringify(response.data.token))
            return response.data
        })
        
        window.location.reload()
    }

    render(){
    return (
        <article id="telaForum">
            { this.state.user ?
                <button className="criar-button" onClick={e => this.handleClickbtn(e)}>Criar Post</button> :
                <></>
            }
                {
                    this.state.criandoPost ?
                    <form id="criandoPost">
                        <p>Link da imagem:</p>
                        <input type="url" className="link-imagem" placeholder="URL da imagem" id="imagem" />
                        <br />
                        <textarea className="conteudo-novo-post" placeholder="Digite aqui o conteúdo da postagem" id="conteudo" />
                        <input type="button" value="Criar" className="confirmar-criacao-post" onClick={e => this.inserirPost()} />
                        <input type="button" value="Cancelar" className="confirmar-criacao-post" onClick={e => this.mudarEstado(e)} />
                    </form> 
                    :
                    <div id="div-posts">
                    { this.state.posts.map((post) => 
                        <Post key={post.id} idPost={post.id} imagem={post.imagem} conteudo={post.conteudo} />
                    )}
            </div>}
        </article>
    )}
}