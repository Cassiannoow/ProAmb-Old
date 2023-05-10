import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { meuContext } from "../../../Contexto";
import './perfil.css'

const urlAPI = 'http://localhost:5006/api/usuarios/'

export default function Perfil() {

    //const [user, setUser] = useContext(meuContext
    const [usuario, setUsuario] = useState({id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""})
    const id = useParams()

    useEffect(() => {
        console.log(id)

        axios(urlAPI + id.id).then(resp => {
            setUsuario(resp.data)
        })
    }, [])
    
    return (
            <article className="perfil">
                <>
                    <img src={usuario.foto} alt="" id="foto" />
                    <div className="nomeUsuario">
                        <h1 id='nome'> {usuario.nome} </h1>
                    </div>
                    <h3 id='username'> @{usuario.username} </h3>
                    <p id='email'> {usuario.email} </p>
                    
                    <div className="biografia">
                        <p id='bio'><b>{usuario.biografia}</b></p>
                    </div>
                </>
            </article>
    )
}