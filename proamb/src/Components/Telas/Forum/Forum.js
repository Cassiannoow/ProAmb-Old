import React, { Component, useEffect } from "react";
import './Forum.css';
import Post from './Post/Post'
import axios from "axios";

const urlAPI = 'http://localhost:5006/api/posts/'

const initialState = {
    post: {id:0, idUsuario:0, imagem:"", conteudo:""},
    posts: [],
    criandoPost: false
}

export default class Forum extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ posts: resp.data})
        })   
    }

    handleClickbtn() {
        this.setState({ criandoPost: true })
    }

    inserirPost(imagem, conteudo) {
        axios.post(urlAPI , {
            imagem,
            conteudo
        }).then((response) => {
            console.log('response:' + JSON.stringify(response.data.token))
            return response.data
        })
    }

    render(){
    return (
        <article id="telaForum">
            <div id="div-criar">
                <button className="criar-button" onClick={this.handleClickbtn}>Criar Post</button>
                {
                    this.state.criandoPost ?
                    <form id="criandoPost">
                        <p>Link da imagem:</p>
                        <input type="url" className="link-imagem" placeholder="URL da imagem" />
                        <br />
                        <textarea className="conteudo-novo-post" placeholder="Digite aqui o conteúdo da postagem" />
                        <input type="button" value="Criar" className="confirmar-criacao-post" />
                    </form> 
                    :
                    <div></div>
                }
            </div>
            <div id="div-posts">
            { this.state.posts.map((post) => 
                <Post key={post.id} idPost={post.id} imagem={post.imagem} conteudo={post.conteudo} />
            )}
            </div>
        </article>
    )}
}