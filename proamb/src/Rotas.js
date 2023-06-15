import React from "react";
import { Routes, Route } from "react-router-dom";

import Forum from './Components/Telas/Forum/Forum';
import Home from './Components/Telas/Home/Home';
import Login from "./Components/Telas/Login/Login";
import Aprender from "./Components/Telas/Aprender/Aprender";
import Descartar from "./Components/Telas/Descartar/Descartar";
import Perfil from "./Components/Telas/Perfil/perfil";
import Cadastro from "./Components/Telas/Login/Cadastro";
import MeuPerfil from './Components/Telas/Perfil/MeuPerfil';
import MeuPerfilEditar from './Components/Telas/Perfil/MeuPerfilEditar';
import PostsCompletos from "./Components/Telas/Forum/Post/PostsCompletos"
import MapPage from "./Components/Telas/Descartar/MapPage";
import SobreNos from "./Components/Telas/SobreNos/SobreNos";
 
export default function Rotas() {

    return(
            <Routes>
                <Route exact path='/' element={
                    <Home />
                } />

                <Route path='/entrar' element={
                    <Login />
                } />

                <Route path='/cadastro' element={
                    <Cadastro />
                } />

                <Route path='/forum' element={
                    <Forum />
                } />

                <Route path='/aprender' element={
                    <Aprender />
                } />

                <Route path='/mapa-proamb' element={
                    <Descartar />
                } />

                <Route path='/perfil/:username' element={
                    <Perfil />
                } />

                <Route path='/meu-perfil' element={
                    <MeuPerfil />
                } />

                <Route path='/post/:id' element={
                    <PostsCompletos />
                } />

                <Route path='/meu-perfil/editar' element={
                    <MeuPerfilEditar />
                } />

                <Route path='/map' element={
                    <MapPage />
                }/>

                <Route path='/sobre-nos' element={
                    <SobreNos />
                } />
            </Routes>
    )
}