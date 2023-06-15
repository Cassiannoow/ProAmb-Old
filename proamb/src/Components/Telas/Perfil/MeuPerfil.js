import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import './perfil.css'
import icone_editar from '../../../assets/img/icons/icons8-editar-100.png' 

const urlAPI = 'http://localhost:5006/api/usuarios/'
const urlAPIposts = 'http://localhost:5006/api/posts/'

export default function MeuPerfil() {

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
            <div>
                <article className="perfil">
                    <div className='informacoes_pessoais'>
                        <img src={usuario.user.foto} alt="" id="foto" />
                        <Link to="/meu-perfil/editar">
                            <img src={icone_editar} className="iconEditar"/>
                        </Link>
                        <div className="nomeUsuario">
                            <h1 id='username'> @{usuario.user.username} </h1>
                        </div>
                        <h3 id='nome'> NOME: {usuario.user.nome} </h3>
                        <h3 id='email'> EMAIL: {usuario.user.email} </h3>
                    </div>
                    
                    
                    <div>
                        <p className="txtFora">CONHEÇA NOVAS PESSOAS :</p>
                        <div className='amigos'>
                            <div id='icones_de_usuario'>
                                {
                                    amigos.lista.map((amigo) => {
                                        function redirect(){
                                            window.location.replace(`/perfil/${amigo.username}`)
                                            console.log(`/perfil/${amigo.username}`)
                                        }
                                        if(amigo.id !== usuario.user.id)
                                        {
                                            return(
                                                <div className="perfil-amigo" key={amigo.id}>
                                                    <Link onClick={redirect}>
                                                        <img src={amigo.foto} alt='foto do amigo' className='foto_do_amigo' />
                                                        <h3 className="nomeAmigo">{amigo.username}</h3>
                                                    </Link>
                                                </div>
                                            )
                                        }
                                        return(<></>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p className="txtFora">BIOGRAFIA:</p>
                        <div className="biografia">
                            <p id='bio'>{usuario.user.biografia}</p>
                        </div>
                    </div>
                    
                </article>

                <div className="areaPosts">
                    {
                        posts.listaPosts.map((post) => {
                            function redirect(){
                                window.location.replace(`/post/${post.id}`)
                            }
                            if(post.idUsuario === usuario.user.id)
                            {           
                                return(
                                    <div className="postPerfil">
                                        <div>
                                            <Link onClick={redirect}>
                                                <div className="temaArtigo">
                                                    <img id="imagemArtigo" src={post.imagem}/*"https://surfguru.space/2018/09/180903100345000000.jpg"*/ alt="tartaruga" />
                                                    <br/>
                                                    <div  className="conteudo">
                                                        <span><b>{post.conteudo}</b></span>
                                                    </div>
                                                    <div className="comenteAqui">
                                                        <p>Leia mais..</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="botoesPosts">
                                            <button className="btn-delete-editar" onClick={e => excluirPost(post.id)}>Excluir</button>
                                            <button className="btn-delete-editar">Editar</button>
                                        </div>
                                    </div>
                                )
                            }
                            return(<></>)
                        })
                    }
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