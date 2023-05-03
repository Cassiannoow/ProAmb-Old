import React from "react";
import './Login.css'
import GoogleIcon from '../../../assets/img/icons/google_icon.png'
import Email from '../../../assets/img/icons/email.png'

export default function Login() {
    let SelecionarLogin = () => {
        let lbLogin = document.querySelector('h3#btnLogin')
        let lbCadastro = document.querySelector('h3#btnCadastro')

        if(lbLogin.classList.contains('deselecionado')) {
            lbLogin.classList.remove('deselecionado')
            lbLogin.classList.add('selecionado')
            lbCadastro.classList.remove('selecionado')
            lbCadastro.classList.add('deselecionado')

            let inputConfSenha = document.getElementById('campos').lastChild
            document.getElementById('campos').removeChild(inputConfSenha)

            let inputEmail = document.getElementById('campos').lastChild
            document.getElementById('campos').removeChild(inputEmail)

            document.getElementById('esqueciASenha').classList.remove('invisivel')

            document.getElementById('btnSubmit').innerHTML = 'Login'
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
                            <input id='username' type="text" placeholder="Nome de usuário" className="campo" />
                            <input id='senha' type="password" placeholder="Senha" className="campo" />
                        </div>
                        <br/>
                        <span id='esqueciASenha'><u>Esqueci a senha</u></span>
                    </div>

                    <div className="botoes">
                        <div className="redesSociais">
                            <img id='googleIcon' src={GoogleIcon} alt="google" width={45} height={50} />
                            <img id='emailIcon' src={Email} alt="email" width={60} height={50} />
                        </div>
                        <button id="btnSubmit" className="btnLogin">Login</button>
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