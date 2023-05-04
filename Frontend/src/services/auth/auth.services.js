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
    try {
        const response = await authApi.post("/login", { email, password });
        localStorage.setItem("auth_token", response.data.token);
    } catch (error) {
        console.error(error);
    }
};


export const authRegister = async (formData) => {
    try {
        const response = await authApi.post('/register', formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error de registro');
    }
};

export const getUser = () => async (dispatch) => {
    try {
        const response = await authApi.get("/me");
        dispatch(setAuthUser(response.data));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
