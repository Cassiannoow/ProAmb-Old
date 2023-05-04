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
            <article>
                <><p id='nome'> {usuario.nome} </p>
                <p id='username'> {usuario.username} </p>
                <p id='email'> {usuario.email} </p>
                <p id='bio'> {usuario.biografia} </p>
                <img src={usuario.foto} alt="" id="foto" />
                </>
            </article>
    )
}