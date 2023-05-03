import axios from 'axios'

const APIBooks = axios.create({
    baseURL: 'http://localhost:4000/api/v1/book'
})

export const GetBooks = async (page = 0, search = "") => {
    return await APIBooks.get(`/?page=${page}&search=${search}`)
        .then(response => response.data)
        .catch(error => console.log(error))
}

