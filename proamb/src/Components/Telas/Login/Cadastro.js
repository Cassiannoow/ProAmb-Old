import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom" ;
import GoogleIcon from '../../../assets/img/icons/google_icon.png';
import Email from '../../../assets/img/icons/email.png';
import Conversor from '../../ConversorMD5/Converter';
import AuthService from "../../../services/AuthService";

export default function Cadastro() {

    const [message, setMessage] = useState('')

    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')

    const navigate = useNavigate();

    let handleSubmitCadastro = async(evento) => {
        evento.preventDefault();
        const userForm = { nome, username, senha, email, cep };

        if(!username || !senha || !nome || !email || !cep) {
            setMessage("Preencha todos os dados para continuar!")
        } else {
            AuthService.cadastrar(nome, username, senha, email, cep).then(
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

    return (
        <article id="telaLogin">
            <section className="login">
                <form>
                    <div className="cabecalho">
                        <h3 id='btnLogin' className="opcao deselecionado">LOGIN</h3>
                        <Link to="/cadastro"><h3 id='btnCadastro' className="opcao selecionada">CADASTRO</h3></Link>
                    </div>

                    <div className="campos">
                        <div id="campos">
                            <input id='nome' type="text" value={nome} placeholder="Nome completo" className="campo" onChange={({target}) => {setNome(target.value); setMessage('')}} />
                            <input id='username' type="text" value={username} placeholder="Nome de usuário" className="campo" onChange={({target}) => {setUsername(target.value); setMessage('')}} />
                            <input id='senha' type="password" value={senha} placeholder="Senha" className="campo" onChange={({target}) => {setSenha(target.value); setMessage('')}} />
                            <input id='email' type="email" value={email} placeholder="Email" className="campo" onChange={({target}) => {setEmail(target.value); setMessage('')}} />
                            <input id='cep' type="text" value={cep} placeholder="CEP" className="campo" onChange={({target}) => {setCep(target.value); setMessage('')}} />
                            <span id='dadosIncorretos'>{message}</span>
                        </div>
                        <br/>
                        <span id='esqueciASenha'><u>Esqueci a senha</u></span>
                    </div>

                    <div className="botoes">
                        <div className="redesSociais">
                            <img id='googleIcon' src={GoogleIcon} alt="google" width={45} height={50} />
                            <img id='emailIcon' src={Email} alt="email" width={60} height={50} />
                        </div>
                        <div id="btnSubmit" className="btnLogin" onClick={handleSubmitCadastro}>Cadastrar</div>
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