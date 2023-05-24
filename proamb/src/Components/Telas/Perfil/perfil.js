import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './perfil.css'

const urlAPI = 'http://localhost:5006/api/usuarios/'

export default function Perfil() {

    //const [user, setUser] = useContext(meuContext
    const [usuario, setUsuario] = useState({id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""})
    const [amigos, setAmigos] = useState({amigo:{id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}, lista: []})
    const info = useParams()

    useEffect(() => {
        console.log(info)

        axios(urlAPI + info.username).then(resp => {
            setUsuario(resp.data)
        })

        axios(urlAPI).then(resp => {
            setAmigos({lista: resp.data})
        })

        console.log(amigos)

        document.getElementById('entrar').innerHTML = 'Sair'
    }, [])
    
    return (
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
                                        window.location.replace('/perfil/'+`${amigo.username}`)
                                        console.log('/perfil/'+`${amigo.username}`)
                                    }
                                    if(amigo.id != usuario.id)
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
    )
}