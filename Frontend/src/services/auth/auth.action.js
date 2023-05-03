import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/auth/',
    headers: {
        'Content-Type': 'application/json'
    }
})

const login = () => { 
    
}