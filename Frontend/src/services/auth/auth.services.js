import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/auth/'
});

export const authLogin = async (email, password) => {
    return await authApi.post("/login", { email, password })
        .then(resquest => localStorage.setItem("auth_token", resquest.data.token))
        .catch(error => {
            console.error(error);
            throw new Error('Error de autenticación')
        })
};


export const authRegister = async () => { }
