import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import './perfil.css'

const urlAPI = 'http://localhost:5006/api/usuarios/'

export default function Perfil() {

    //const [user, setUser] = useContext(meuContext
    const [usuario, setUsuario] = useState({user: {id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}})
    const [amigos, setAmigos] = useState({amigo:{id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""}, lista: []})

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        
        setUsuario(user)
        

        axios(urlAPI).then(resp => {
            setAmigos({lista: resp.data})
        })
    }, [])
    
    return (
        <>
        { 
            usuario ? (
            <article className="perfil">
                <div className='informacoes_pessoais'>
                    <img src={usuario.user.foto} alt="" id="foto" />
                    <div className="nomeUsuario">
                        <h1 id='username'> @{usuario.user.username} </h1>
                    </div>
                    <h3 id='nome'> NOME: {usuario.user.nome} </h3>
                    <h3 id='email'> EMAIL: {usuario.user.email} </h3>
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
                                    if(amigo.id != usuario.user.id)
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
                        <p id='bio'>{usuario.user.biografia}</p>
                    </div>
                </div>
                
            </article>
        ) :
        (
            <p>VC n está logado</p>
        )
        }
        </>
    )
}