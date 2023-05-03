import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/auth/'
});

export const authLogin = async (email, password) => {
    return await authApi.post("/login", { email, password })
        .then(response => console.log(response.headers))
        .catch(error => console.error(error))
};
