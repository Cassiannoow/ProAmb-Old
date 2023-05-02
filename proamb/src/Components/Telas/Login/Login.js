import React from "react";
import './Login.css'
import GoogleIcon from '../../../assets/img/icons/google_icon.png'
import Email from '../../../assets/img/icons/email.png'

export default function Login() {
    return(
        <article>
            <section className="login">
                <form>
                    <h4 className="opcao">LOGIN</h4> <h4 className="opcao">CADASTRO</h4>
                    <input type="text" width={300} placeholder="Nome de usuário" />
                    <input type="text" width={300} placeholder="Senha" />
                    <label>Esqueci a senha</label>
                    <img src={GoogleIcon} alt="google" width={45} height={50} />
                    <img src={Email} alt="email" width={45} height={50} />
                    <button className="btnLogin">Login</button>
                </form>
            </section>
            <section className="info">

            </section>
        </article>
    )
}