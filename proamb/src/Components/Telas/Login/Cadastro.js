import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom" ;
import GoogleIcon from '../../../assets/img/icons/google_icon.png';
import Email from '../../../assets/img/icons/email.png';
import Conversor from '../../ConversorMD5/Converter';
import AuthService from "../../../services/AuthService";
import './Login.css'

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
            AuthService.cadastrar(nome, username, Conversor(senha), email, cep, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFhklEQVR4nO1dS2icVRT+QCOaVbtoJlG0mKSrBBKhAWPEhTVNpe4aMzmDj4UP0D6CgsWVDxDFJ+5UqmitaC3ia1nRqLjoStRurIquLG1FULqoC+svB85ACEyS+e+95557537wQUhm/jmPzH//e14XKCgoKCgoKCgoKCgoKFgL/QAGAWwDMA5gEsAUgBuEU/K7cXnNoLynwAMuBTAkBp4DcDsAqkl+70651pBcu2AD6AMwAmAHgKaDA9YjX/tm+Sz+zIJVaACYAbAQ0AmduCC3O5ah58H3+NkITqAO3AXgml70Cv833mrAAbSGYwbQA7gcwLQBg9MGeVPOT2mjAOYNGJm65Lws/tmgTxZNSpw3ArgMiWMzgNsMGJM8kXXZhIQX7hRvUbSBTSZvLpPC1sAbO4rMpuiYBDiGtGjAaBSYi/KgYhpbe8QZtILXwvCakfNtijqwaXFN2ewYjU2d85aevjiUvduAUcjAI7GJyHGMUMgSgCMAfgBwGsA/Qv75e/nbUgS5OGIdFaPKCj8M4ASA/wBUG+BJAAeVZRyJGSjU3Pi9A+DfDTpiJfk9byvKyTa5IoZDtOJTLQDLNRyxmstyLQ2Z+TauigHF/7hPPTijzY8V5VbNQGoll1726IxK1p6XFJNcKrhKSaE7AZz17BDmOQB3KelwpYZDtHLghwM4o803lXRgWwVFQ0kRAvBLQIf8nMtaMqOkxN4u9hp115K9Srrw02gQ9CnWTb0Q0BltPqeky0KokMqI4tf8dQWHHFLUZziEQ3YoKnBUwSFHFfXhslXvEV3NXMehzL4hTd8F3kOKwhOA5xUc8qyyTlw26w2TysI/qPCU9YCyThM+HTKnLDwF3of8FEEf7k/xhhjp2bcy2KmvJNvQC/ojCE8SyzqTeCxrNb3kSQYjCU8SmfW5lvC1XoyoT8NX4RtF5CceHfJRZF28FNaNR1ai5Slj+IVixrATx3w45LrISpDwiENO/bAB+Um2D86YMqAICfcD+LqLdeVbAA8ZkLvN7T4cYrEF7YBUknAN1u8ALgj55+/kG3HAgJxBih8sOoQS5XRutyxKnNtzWtQpA07m8NhLGXEsh40hZcTR1EMnlBkbKQcXKUN6K8Lu5e4o8lgV7w07AwnJsaXHAbwH4DPp/YhB/ux3ATwWMN41azmFy0q/ESjfUTnyjBRAtCyncH0WOXAu+5QBw1fr8EfPefdBi2VA+yVjVyXCcwD2WSwDghR7uQh1N4DfDBi56pK/ekj5ei+U81FK+oEB41Y1ecxiKalLsfU90rZcJcoLooOpYmuXdoRXDRi1cuQr1toRXBp27gXwhwGjVjX5J4D7a+oefJjmLTUFexLARQPGrbokp4ufstrSBmlkrLu4HTNg4KpLvu+gr9qUoF01BWxJmKJKhMcdnMH10GrY4iAoO+VLA8au1uE3juET9UHMLsUPdwD4yoDRqw5cFhnr6nc9Ig2f2eMgNEm5jqWF/qJEfZMcPuOrEZS7Yf824Iy/PHVVBdmVa9dt8S7488BdU2vxhMM+Q20TGGPE3zPKAUgOHD6d24g/yABIn2neJ2QaXChHnJLG0laOQzBDjol9VHo6TntwAl/jwwAj/5q+k0+pDFI+COA12azx8Jjzaxj/vLzmuLznkUAyLaZwIs+o4nTrFoD7ZALpkvys1ZSTxKjxNq6OdMAXKTGpYfxtlOMqDGJTZge67Lb4NNUt+jJp+pnO7YTQkURP3NljIRwSCqkdmzcjMmePAYckFylwTnI+PYctHgrwyCNnZS5xz6MhkdKFiIcT98RRq3WeyIblW6NxfPewpQhtKgfcT0h/iks0eV5uRxMSCLwktnK5oF8iANuko3VC+uinhVPyuzF5TSNmOrWgoKCgoKCgoKCgoAAJ4H8ahZ/pgeHzkAAAAABJRU5ErkJggg==")
            .then(
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
                        <Link to='/entrar' ><h3 id='btnLogin' className="deselecionado">LOGIN</h3></Link>
                        <h3 id='btnCadastro' className="selecionado">CADASTRO</h3>
                    </div>

                    <div className="campos">
                        <div id="campos">
                            <input id='nome' type="text" value={nome} placeholder="Nome completo" className="campo" onChange={({target}) => {setNome(target.value); setMessage('')}} />
                            <input id='username' type="text" value={username} placeholder="Nome de usuário" className="campo" onChange={({target}) => {setUsername(target.value); setMessage('')}} />
                            <input id='email' type="email" value={email} placeholder="Email" className="campo" onChange={({target}) => {setEmail(target.value); setMessage('')}} />
                            <input id='senha' type="password" value={senha} placeholder="Senha" className="campo" onChange={({target}) => {setSenha(target.value); setMessage('')}} />
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