import axios from 'axios'
import { setAuthUser } from '../../features/auth/auth.user.slice';
const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/auth/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('auth_token')
    }
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

export const getUser = () => async (dispatch) => {
    return await authApi.get("/me")
        .then(resquest => dispatch(setAuthUser(resquest.data)))
        .catch(error => {
            console.error(error);
            throw new Error('Error de autenticación')
        })
}