import './Header.css';
import Logo from '../../assets/img/Logo/ProAmb_logo-removebg-preview.png'
import BarraDePesquisa from '../BarraDePesquisa/BarraDePesquisa';
import React from "react";
import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <div className='header'>
            <header>
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
                    <Link to='/cadastrar'>
                        Cadastrar - Se
                    </Link>
                </h3>

                <Link to='/entrar'>
                    <button className='entrar'>
                        <Link to='/entrar'>
                            <b>Entrar</b>
                        </Link>
                    </button>
                </Link>
            </header>
        </div>
    )
}