import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import './MeuPerfilEditar.css'
const urlAPI = 'http://localhost:5006/api/usuarios/'
const urlAPIposts = 'http://localhost:5006/api/posts/'

export default function MeuPerfilEditar() {

    //const [user, setUser] = useContext(meuContext
    const [usuario, setUsuario] = useState({user: {id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}})
    const [amigos, setAmigos] = useState({amigo:{id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}, lista: []})
    const [posts, setPosts] = useState({post:{id:0, idUsuario:0, imagem:"", conteudo:""}, listaPosts: []})
    const [comentarios, setComentarios] = useState({comentario: {id: 0, idPost: 0, idUsuario: 0, conteudo:''}, listaComentarios: []})

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        
        setUsuario(user)
        

        axios(urlAPI).then(resp => {
            setAmigos({lista: resp.data})
        })

        axios(urlAPIposts).then(resp => {
            setPosts({listaPosts: resp.data})
        })

    }, [])

    function excluirPost(id){

        axios.get("http://localhost:5006/api/comentarios/").then(resp => {
            setComentarios({listaComentarios: resp.data})
        })

        comentarios.listaComentarios.map((comentario)=>
        {
            console.log(comentario)
            axios.delete("http://localhost:5006/api/comentarios/" + comentario.id).then(resp => {
            })
        })

        axios.delete(`${urlAPIposts}${id}`).then(resp => {
            console.log(`Post de id ${id} deletado`)
            window.location.reload()
        })
    }
    
    return (
        <>
        { 
            usuario ? (
            <div className="perfilEditar">
                    <div className='informacoes_pessoaisEditar'>
                        <img src={usuario.user.foto} alt="" id="fotoEditar" />
                        <div className="textosEditar">
                            <div className="nomeUsuarioEditar">
                                <h1 id='usernameEditar'> @{usuario.user.username} </h1>
                                <h3 id='nomeEditar'> NOME: {usuario.user.nome} </h3>
                                <h3 id='emailEditar'> EMAIL: {usuario.user.email} </h3>
                            </div>
                            <div>
                                <p className="txtForaEditar">BIOGRAFIA:</p>
                                <div className="biografiaEditar">
                                    <p id='bioEditar'>{usuario.user.biografia}</p>
                                </div>
                                <div className="botoesEditar">
                                    <button className="btn-delete-editar">Salvar</button>
                                    <button className="btn-delete-editar" onClick={e => window.location.replace('/meu-perfil')}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        ) :
        (
            <p>VC n está logado</p>
        )
        }
        </>
    )
}