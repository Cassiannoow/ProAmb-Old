import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Forum from './Components/Telas/Forum/Forum';
import Home from './Components/Telas/Home/Home';
import Login from "./Components/Telas/Login/Login";
import Aprender from "./Components/Telas/Aprender/Aprender";
import Perfil from "./Components/Telas/Perfil/perfil"
import { meuContext } from "./Contexto";

export default function Rotas(props) {

    const [user,setUser] = useContext(meuContext)

    return(
        <meuContext.Provider value={[user,setUser]}>
            <Routes>
                <Route exact path='/' element={
                    <Home />
                } />

                <Route path='/entrar' element={
                    <meuContext.Provider value={[user,setUser]}>
                        <Login user={props.user} />
                    </meuContext.Provider>
                } />

                <Route path='/forum' element={
                    <Forum />
                } />

                <Route path='/aprender' element={
                    <Aprender />
                } />

                <Route path='/perfil/:id' element={
                    <meuContext.Provider value={[user,setUser]}>
                        <Perfil user={props.user} />
                    </meuContext.Provider>
                } />
            </Routes>
        </meuContext.Provider>
    )
}