import './Header.css';
import Logo from '../../assets/img/Logo/ProAmb_logo-removebg-preview.png'
import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props)
{
    return (
        <header>
            <Link to='/'>
                <img src={Logo} alt='Logo ProAmb' />
            </Link>

           <Link to='/'>
                <h3>Início</h3>
            </Link>

            <Link to='/aprender'>
                <h3>Aprender</h3>
            </Link>

            <Link to='/forum'>
                <h3>Fórum</h3>
            </Link>

            <Link to='/cadastrar'>
                <h3>Cadastrar-se</h3>
            </Link>

            <Link to='/entrar'>
                <button>
                    <Link to='/entrar'>
                        <b>Entrar</b>
                    </Link>
                </button>
            </Link>
        </header>
    )
}