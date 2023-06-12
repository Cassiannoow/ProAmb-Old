import axios from "axios";
import {React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './perfil.css';

const urlAPI = 'http://localhost:5006/api/usuarios/'
const urlAPIposts = 'http://localhost:5006/api/posts/'

export default function Perfil() {

    const [usuario, setUsuario] = useState({id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""})
    const [amigos, setAmigos] = useState({amigo:{id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}, lista: []})
    const [posts, setPosts] = useState({post:{id:0, idUsuario:0, imagem:"", conteudo:""}, listaPosts: []})
    const info = useParams()

    useEffect(() => {

        axios(urlAPI + info.username).then(resp => {
            setUsuario(resp.data)
        })

        axios(urlAPI).then(resp => {
            setAmigos({lista: resp.data})
        })
        
        axios(urlAPIposts).then(resp => {
            setPosts({listaPosts: resp.data})
        })

    }, [info])
    
    return (
        <div>
            <article className="perfil">
                <div className='informacoes_pessoais'>
                    <img src={usuario.foto} alt="" id="foto" />
                    <div className="nomeUsuario">
                        <h1 id='username'> @{usuario.username} </h1>
                    </div>
                    <h3 id='nome'> NOME: {usuario.nome} </h3>
                    <h3 id='email'> EMAIL: {usuario.email} </h3>
                </div>
                
                
                <div>
                    <p className="txtFora">SEUS AMIGOS:</p>
                    <div className='amigos'>
                        <div id='icones_de_usuario'>
                            {
                                amigos.lista.map((amigo) => {
                                    function redirect(){
                                        window.location.replace(`/perfil/${amigo.username}`)
                                        console.log(`/perfil/${amigo.username}`)
                                    }
                                    if(amigo.id !== usuario.id)
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
                        <p id='bio'>{usuario.biografia}</p>
                    </div>
                </div>
                
            </article>


            <div className="areaPosts">
                    {
                        posts.listaPosts.map((post) => {
                            if(post.idUsuario === usuario.id)
                            {
                                return(
                                    <div className="postPerfil">

                                    <Link to="">
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
                                )
                            }
                            return(<></>)
                        })
                    }
                </div>
        </div>
    )
}