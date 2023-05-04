import axios from 'axios'
import { setBook, setPage, setSearch } from '../../features/boosk/books.slice'
const APIBooks = axios.create({
    baseURL: 'http://localhost:4000/api/v1/book'
})

export const getBooks = (page = 0, search = "") => async (dispatch) => {
    const response = await APIBooks.get(`/?page=${page}&search=${search}`);
    dispatch(setBook(response.data));
    dispatch(setPage(page));
    dispatch(setSearch(search));
    return response.data;
};


