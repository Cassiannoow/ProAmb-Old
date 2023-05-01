import './MenuVertical.css';
import React from "react";
import { Link } from 'react-router-dom';
import Ilustracao from '../../assets/img/Ilustrations/BonequinhodandoOi.svg'
import RetanguloBase from '../../assets/img/Ilustrations/RetanguloCircular.svg'
import Aviaozinho from '../../assets/img/Fotos/aviaozinho.png'

export default function MenuVertical(props)
{
    return (
        <div>
            <div className='foto'>
                <img src={Ilustracao} alt='bonequinho dando oi' className='imagemLateral' />
                <div className='aviaozinho'>
                    <img src={Aviaozinho} alt="aviaozinho" />
                </div>
                <div className='retangulo'>
                    <img src={RetanguloBase} alt='retangulo' width={550} className='retanguloBase' />
                </div>
            </div>
            <div className='nav'>
                <ul>
                    <li id='descartar'><Link to='/mapa-proamb'>Descartar</Link></li>
                    <li id="aprender"><Link to='/aprender'>Aprender</Link></li>
                    <li id="inspirar"><Link to='/inspirar'>Inspirar</Link></li>
                    <li id="sobre"><Link to='/sobre'>Sobre Nós</Link></li>
                </ul>
            </div>
        </div>
    )
}