import React from "react";
import { Routes, Route } from "react-router-dom";

import Forum from './Components/Telas/Forum/Forum';
import Home from './Components/Telas/Home/Home';
import Login from "./Components/Telas/Login/Login";
import Aprender from "./Components/Telas/Aprender/Aprender";

export default function Rotas() {
    return(
        <Routes>
            <Route exact path='/' element={
                <Home />
            } />

            <Route path='/entrar' element={
                <Login />
            } />

            <Route path='/forum' element={
                <Forum />
            } />

            <Route path='/aprender' element={
                <Aprender />
            } />
        </Routes>
    )
}