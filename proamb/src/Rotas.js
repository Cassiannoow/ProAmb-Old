import React from "react";
import { Routes, Route } from "react-router-dom";

import Forum from './Components/Telas/Forum/Forum'
import Home from './Components/Telas/Home/Home'
import Login from "./Components/Telas/Login/Login";

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
        </Routes>
    )
}