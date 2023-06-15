import './MenuVertical.css';
import React from "react";
import { Link } from 'react-router-dom';
import Ilustracao from '../../assets/img/Ilustrations/BonequinhodandoOi.svg'
import RetanguloBase from '../../assets/img/Ilustrations/RetanguloCircular.svg'
import Aviaozinho from '../../assets/img/Fotos/aviaozinho.png'
import Lixeira from '../../assets/img/icons/Lixeira.png'
import Livro from '../../assets/img/icons/Livro.png'
import Chat from '../../assets/img/icons/Chat.png'
import Grupo from '../../assets/img/icons/Grupo.png'

export default function MenuVertical(props)
{
    return (
        <div className='mainContext'>
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
                    <li id='descartar'>
                        <Link to='/mapa-proamb'>Descartar</Link>
                        <img src={Lixeira} alt='Lixeira' className='iconeLateral' />
                    </li>
                    <li id="aprender">
                        <Link to='/aprender'>Aprender</Link>
                        <img src={Livro} alt='Livro' className='iconeLateral' />
                    </li>
                    <li id="inspirar">
                        <Link to='/forum'>Inspirar</Link>
                        <img src={Chat} alt='Chat' className='iconeLateral' />
                    </li>
                    <li id="sobre">
                        <Link to='/sobre-nos'>Sobre Nós</Link>
                        <img src={Grupo} alt='Grupo' className='iconeLateral' />
                    </li>
                </ul>
            </div>
        </div>
    )
}