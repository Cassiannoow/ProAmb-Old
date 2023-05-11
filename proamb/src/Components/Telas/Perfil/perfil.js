import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { meuContext } from "../../../Contexto";
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
                        <h1 id='nome'> {usuario.nome} </h1>
                    </div>
                    <h3 id='username'> @{usuario.username} </h3>
                    <p id='email'> {usuario.email} </p>
                </div>

                <div className='amigos'>
                    <h3>Seus Amigos</h3>
                    <div id='icones_de_usuario'>
                        {
                         amigos.lista.map((amigo) => {
                            if(amigo.id != usuario.id)
                            return(
                                <div className="perfil-amigo">
                                    <img src={amigo.foto} alt='foto do amigo' className='foto_do_amigo' />
                                    <p>{amigo.username}</p>
                                </div>
                            )
                         })
                        }
                    </div>
                </div>

                <div className="biografia">
                    <h3>Biografia</h3>
                    <p id='bio'>{usuario.biografia}</p>
                </div>
            </article>
    )
}