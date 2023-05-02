import React from "react";
import './Login.css'
import GoogleIcon from '../../../assets/img/icons/google_icon.png'
import Email from '../../../assets/img/icons/email.png'

export default function Login() {
    let SelecionarLogin = () => {
        let lbLogin = document.querySelector('h3#btnLogin')
        let lbCadastro = document.querySelector('h3#btnCadastro')
        lbLogin.classList.remove('deselecionado')
        lbLogin.classList.add('selecionado')
        lbCadastro.classList.remove('selecionado')
        lbCadastro.classList.add('deselecionado')
    }

    let SelecionarCadastro = () => {
        let lbLogin = document.querySelector('h3#btnLogin')
        let lbCadastro = document.querySelector('h3#btnCadastro')
        lbCadastro.classList.remove('deselecionado')
        lbCadastro.classList.add('selecionado')
        lbLogin.classList.remove('selecionado')
        lbLogin.classList.add('deselecionado')
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
                        <input id='username' type="text" placeholder="Nome de usuário" className="campo" />
                        <input id='senha' type="password" placeholder="Senha" className="campo" />
                        <span id='esqueciASenha'>Esqueci a senha</span>
                    </div>
                    <div className="botoes">
                        <div className="redesSociais">
                            <img id='google' src={GoogleIcon} alt="google" width={45} height={50} />
                            <img id='email' src={Email} alt="email" width={60} height={50} />
                        </div>
                        <button className="btnLogin">Login</button>
                    </div>
                </form>
            </section>
            <section className="info">
                <div id="cardLogin" className="card">
                <span>NADA É MAIOR DO QUE A PAZ QUE A 
                NATUREZA TE POSSIBILITA
 
                Somos a ProAmb, um aplicativo disposto a ajudar aqueles que querem aprender um pouco mais sobre a natureza e reciclagem!

                Por meio do aplicativo você poderá visualizar quais pontos de coleta existem perto da sua casa e ainda interagir com outros pessoas que também se interessam pelo assunto!
                </span>
                </div>
            </section>
        </article>
    )
}