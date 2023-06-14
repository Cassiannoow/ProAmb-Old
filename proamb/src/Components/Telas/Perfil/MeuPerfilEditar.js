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

    const [message, setMessage] = useState('')

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [biografia, setBiografia] = useState('')
    const [foto, setFoto] = useState('')
    const [cep, setCep] = useState('')

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

    function salvarAlteracoes(){
        console.log(nome)
        console.log(email)
        console.log(foto)
        console.log(biografia)
        console.log(cep)


        axios.put(`${urlAPI}${usuario.user.id}`, {
            nome,
            email,
            foto,
            biografia,
            cep
        }).then(
            (response) => {
                console.log(response)
                window.location.replace('/meu-perfil')
            }
        )
    }
    
    return (
        <>
        {  //falta colocar pra mudar o cep
            usuario ? (
            <div className="perfilEditar">
                    <div className='informacoes_pessoaisEditar'>
                        <img src={usuario.user.foto} alt="" id="fotoEditar" />
                        <div className="textosEditar">
                            <div className="nomeUsuarioEditar">
                                <h1 id='usernameEditar'> @{usuario.user.username} </h1>
                                <h3 id='nomeEditar'> NOME: </h3> <input type="text" defaultValue={usuario.user.nome} className="campo-perfil-editar" onChange={({target}) => {setNome(target.value); setMessage('')}} />
                                <h3 id='emailEditar'> EMAIL: </h3> <input type="text" defaultValue={usuario.user.email} className="campo-perfil-editar" onChange={({target}) => {setEmail(target.value); setMessage('')}} />
                                <h3 id='urlFotoEditar'> FOTO (URL): </h3> <input type="text" defaultValue={usuario.user.foto} placeholder="Digite a url da sua foto de perfil" className="campo-perfil-editar" onChange={({target}) => {setFoto(target.value); setMessage('')}} />
                            </div>
                            <div>
                                <p className="txtForaEditar">BIOGRAFIA:</p>
                                <div className="biografiaEditar">
                                    <input id='bioEditar' type="text" defaultValue={usuario.user.biografia} onChange={({target}) => {setBiografia(target.value); setMessage('')}} />
                                </div>
                                <div className="botoesEditar">
                                    <button className="btn-delete-editar" onClick={salvarAlteracoes}>Salvar</button>
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