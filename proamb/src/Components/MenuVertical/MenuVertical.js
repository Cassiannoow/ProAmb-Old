import './MenuVertical.css';
import React from "react";
import { Link } from 'react-router-dom';

export default function MenuVertical(props)
{
    return (
        <div>
            <div className='nav'>
                <li><Link to='/mapa-proamb'>Descartar</Link></li>
                <li id="aprender"><Link to='/aprender'>Aprender</Link></li>
                <li id="inspirar"><Link to='/inspirar'>Inspirar</Link></li>
                <li id="sobre"><Link to='/sobre'>Sobre Nós</Link></li>
            </div>
        </div>
    )
}