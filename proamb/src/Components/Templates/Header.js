import './Header.css';
import Logo from '../../assets/img/Logo/ProAmb_logo-removebg-preview.png'
import BarraDePesquisa from '../BarraDePesquisa/BarraDePesquisa';
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { useState } from 'react';

export default function Header()
{

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    let deslogar = () => {
        AuthService.logout()
        setCurrentUser(undefined)
    }

    const [currentUser, setCurrentUser] = useState(undefined)

    return (
        <div className='header'>
            <header id='navegacao'>
                <Link to='/'>
                    <img src={Logo} alt='Logo ProAmb' id="logo"/>
                </Link>
                <h3 className='item'>
                    <Link to='/'>
                        Início
                    </Link>
                </h3>

                <BarraDePesquisa />

                <h3 className='item'>
                    <Link to='/aprender'>
                        Aprender
                    </Link>
                </h3>

                <h3 className='item'>
                    <Link to='/forum'>
                        Fórum
                    </Link>
                </h3>

                <h3 className='item'>
                    <Link to='/mapa-proamb'>
                        Descartar
                    </Link>
                </h3>

                <section>
                    {
                    currentUser ? (
                        <Link to='/meu-perfil'>
                            <div className='entrar'>
                                <span id='entrar'>Perfil</span>
                            </div>
                        </Link>
                        )
                        : (
                        <Link to='/entrar'>
                            <div className='entrar'>
                                <span id="entrar">Entrar</span>
                            </div>
                        </Link> )
                    }
                </section>
                <section>
                    {
                        currentUser ? (
                        <Link to='/entrar'>
                            <div className='entrar' onClick={deslogar}>
                                <span id='entrar'>Sair</span>
                            </div>
                        </Link> ) :
                        <></>
                    }
                </section>
            </header>
        </div>
    )
}