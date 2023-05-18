import React, { Component, useEffect } from "react";
import './Forum.css';
import Post from './Post/Post'
import axios from "axios";

const urlAPI = 'http://localhost:5006/api/posts/'

const initialState = {
    post: {id:0, idUsuario:0, imagem:"", conteudo:""},
    posts: []
}

export default class Forum extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ posts: resp.data})
        })   
    }

    render(){
    return (
        <article id="telaForum">
            { this.state.posts.map((post) => 
                <Post idPost={post.id} imagem={post.imagem} conteudo={post.conteudo} />
            )}
        </article>
    )}
}