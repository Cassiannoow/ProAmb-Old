import './Header.css';
import Logo from '../../assets/img/Logo/ProAmb_logo-removebg-preview.png'
import Lupa from '../../assets/img/icons/lupa.png'
import React from "react";
import { Link } from 'react-router-dom';

export default function Header()
{
    return (
        <header>
            <Link to='/'>
                <img src={Logo} alt='Logo ProAmb' id="logo"/>
            </Link>
            <h3>
                <Link to='/'>
                    Início
                </Link>
            </h3>

            <div id="divBusca">
                <input type="text" id="txtBusca" placeholder="Buscar"/>
                <img src={Lupa} id="btnBusca" alt="Buscar"/>
            </div>

            <h3>
                <Link to='/aprender'>
                    Aprender
                </Link>
            </h3>

            <h3>
                <Link to='/forum'>
                    Fórum
                </Link>
            </h3>

            <h3>
                <Link to='/cadastrar'>
                    Cadastrar - Se
                </Link>
            </h3>

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