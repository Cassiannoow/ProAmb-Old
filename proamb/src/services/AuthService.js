import axios from "axios";

const API_URL = "http://localhost:5006/api/";

const login = (username, senha) => {
    return axios.post(API_URL + "home/login", {
        username,
        senha
    })
    .then((response) => {
        console.log("response: " + JSON.stringify(response.data.token))
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const cadastrar = (nome, username, senha, email, cep) => { //tem q tá vendo
    return axios.post(API_URL + "usuarios", {
        nome,
        username,
        senha,
        email,
        cep
    })
    .then((response) => { //tem q ver isso aqui
        console.log("response: " + JSON.stringify(response.data.token))
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

const AuthService = {
    login, logout, getCurrentUser,cadastrar,
};

export default AuthService;