import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import './Login.css';
import GoogleIcon from '../../../assets/img/icons/google_icon.png';
import Email from '../../../assets/img/icons/email.png';
import Conversor from '../../ConversorMD5/Converter';
import axios from 'axios';
import AuthService from "../../../services/AuthService";

export default function Login() {

    const urlAPI = 'http://localhost:5006/api/usuarios/'

    const [ username, setUsername ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ message, setMessage ] = useState('')
    const navigate = useNavigate();

    let handleSubmitLogin = async(evento) => {
        evento.preventDefault();
        const userForm = { username, senha };

        if(!username || !senha) {
            setMessage("Preencha o username e a senha para continuar!")
        } else {
            AuthService.login(username, Conversor(senha)).then(
                () => {
                    console.log("localStorage: " + localStorage.getItem("user"));
                    navigate("/meu-perfil");
                    window.location.reload();
                },
                (error) => {
                    const resMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message ) ||
                        error.message || error.toString();
                    setMessage(resMessage);
                }
            );
        }
    }

    return(
        <article id="telaLogin">
            <section className="login">
                <form>
                    <div className="cabecalho">
                        <h3 id='btnLogin' className="opcao selecionado">LOGIN</h3>
                        <Link to="/cadastro"><h3 id='btnCadastro' className="opcao deselecionado">CADASTRO</h3></Link>
                    </div>

                    <div className="campos">
                        <div id="campos">
                            <input id='username' type="text" value={username} placeholder="Nome de usuário" className="campo" onChange={({target}) => {setUsername(target.value); setMessage('')}} />
                            <input id='senha' type="password" value={senha} placeholder="Senha" className="campo" onChange={({target}) => {setSenha(target.value); setMessage('')}} />
                            <span id='dadosIncorretos'>{message ? 'Username ou senha incorretos' : ''}</span>
                        </div>
                        <br/>
                        <span id='esqueciASenha'><u>Esqueci a senha</u></span>
                    </div>

                    <div className="botoes">
                        <div className="redesSociais">
                            <img id='googleIcon' src={GoogleIcon} alt="google" width={45} height={50} />
                            <img id='emailIcon' src={Email} alt="email" width={60} height={50} />
                        </div>
                        <div id="btnSubmit" className="btnLogin" onClick={handleSubmitLogin}>Login</div>
                    </div>
                </form>
            </section>

            <section className="info">
                <div id="cardLogin" className="card">
                    <h4>NADA É MAIOR DO QUE A PAZ QUE A NATUREZA TE POSSIBILITA</h4>
                    <span>
                        Somos a ProAmb, um aplicativo disposto a ajudar aqueles que querem aprender
                        um pouco mais sobre a natureza, a reciclagem e o descarte correto de lixo!
                    </span> <br/> <br/>
                    <span>
                        Por meio do aplicativo você poderá visualizar quais pontos de coleta existem
                        perto da sua casa e ainda interagir com outros pessoas que também se interessam
                        pelo assunto!
                    </span>
                </div>
            </section>
        </article>
    )
}