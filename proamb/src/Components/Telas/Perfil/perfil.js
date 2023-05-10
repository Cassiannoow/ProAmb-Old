import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { meuContext } from "../../../Contexto";
import './perfil.css'

const urlAPI = 'http://localhost:5006/api/usuarios/'

export default function Perfil() {

    //const [user, setUser] = useContext(meuContext
    const [usuario, setUsuario] = useState({id:0,nome:"",email:"",senha:"",username:"",foto:"",biografia:"",cep:""})
    const info = useParams()

    useEffect(() => {
        console.log(info)

        axios(urlAPI + info.username).then(resp => {
            setUsuario(resp.data)
        })
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
                        {/*usuario.amigos.map((amigo) => {
                            <img src={amigo.foto} alt='foto do amigo' className='foto_do_amigo' />
                        })*/
                        //deve-se inserir no bd amigos para cada usuario
                        //além disso, tb é necessário puxar um axios aq o usuario correspondente ao id no bd
                        //formatar css da tela
                        //criar operações de login e deslogar por token
                        //por enquanto é isso :)
                        }
                    </div>
                </div>

                <div className="biografia">
                    <h3>Descrição</h3>
                    <p id='bio'>{usuario.biografia}</p>
                </div>
            </article>
    )
}