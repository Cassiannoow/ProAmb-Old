import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
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
            AuthService.login(username, senha).then(
                () => {
                    console.log("localStorage: " + localStorage.getItem("user"));
                    navigate("/perfil/" + username);
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

    let handleSubmitCadastrar = () => { //incompleto, talvez eu crie outra pagina para cadastro
        evento.preventDefault();

        nomeUsuario = document.getElementById();

        axios.post(urlAPI, {
            nomeUsuario,
            emailUsuario,
            senhaUsuario,
            usernameUsuario,
            fotoUsuario,
            biografiaUsuario,
            cepUsuario
        }).then((response) => {

        })
    }

    let SelecionarLogin = () => {
        let lbLogin = document.querySelector('h3#btnLogin')
        let lbCadastro = document.querySelector('h3#btnCadastro')

        if(lbLogin.classList.contains('deselecionado')) {
            lbLogin.classList.remove('deselecionado')
            lbLogin.classList.add('selecionado')
            lbCadastro.classList.remove('selecionado')
            lbCadastro.classList.add('deselecionado')

            let divCampos = document.getElementById('campos')
            divCampos.removeChild(divCampos.lastChild)
            divCampos.removeChild(divCampos.lastChild)

            document.getElementById('esqueciASenha').classList.remove('invisivel')

            let btnSubmit = document.getElementById('btnSubmit')
            btnSubmit.innerHTML = 'Login'
            btnSubmit.onClick = handleSubmitLogin
        }
    }

    let SelecionarCadastro = () => {
        let lbLogin = document.querySelector('h3#btnLogin')
        let lbCadastro = document.querySelector('h3#btnCadastro')
        
        if(lbCadastro.classList.contains('deselecionado')) {
            lbCadastro.classList.remove('deselecionado')
            lbCadastro.classList.add('selecionado')
            lbLogin.classList.remove('selecionado')
            lbLogin.classList.add('deselecionado')

            let inputEmail = document.createElement('input')
            inputEmail.id = 'email'
            inputEmail.type = 'email'
            inputEmail.className = 'campo'
            inputEmail.placeholder = 'Email'

            let inputConfirmarSenha = document.createElement('input')
            inputConfirmarSenha.id = 'confSenha'
            inputConfirmarSenha.type = 'password'
            inputConfirmarSenha.className = 'campo'
            inputConfirmarSenha.placeholder = 'Confirmar Senha'

            document.getElementById('campos').appendChild(inputEmail)
            document.getElementById('campos').appendChild(inputConfirmarSenha)

            document.getElementById('esqueciASenha').classList.add('invisivel')

            document.getElementById('btnSubmit').innerHTML = 'Cadastrar'
            document.getElementById('btnSubmit').onClick = handleSubmitCadastrar
        }
    }

    return(
        <article id="telaLogin">
            <section className="login">
                <form>
                    <div className="cabecalho">
                        <h3 id='btnLogin' className="opcao selecionado" onClick={SelecionarLogin}>LOGIN</h3>
                        <h3 id='btnCadastro' className="opcao deselecionado" onClick={SelecionarCadastro}>CADASTRO</h3>
                    </div>

                    <div className="campos">
                        <div id="campos">
                            <input id='username' type="text" value={username} placeholder="Nome de usuário" className="campo" onChange={({target}) => {setUsername(target.value); setMessage('')}} />
                            <input id='senha' type="password" value={senha} placeholder="Senha" className="campo" onChange={({target}) => {setSenha(target.value); setMessage('')}} />
                            <span id='dadosIncorretos'></span>
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