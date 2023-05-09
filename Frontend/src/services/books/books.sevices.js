import axios from 'axios'
import { setBook, setPage, setSearch } from '../../features/boosk/books.slice'
const APIBooks = axios.create({
  baseURL: 'http://localhost:4000/api/v1/book',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': localStorage.getItem('auth_token'),
    'Cross-Origin-Resource-Policy': '*'
  },
  crossOrigin: true
});
export const getBooks = (page = 0, search = "") => async (dispatch) => {
  const response = await APIBooks.get(`/?page=${page}&search=${search}`);
  dispatch(setBook(response.data));
  dispatch(setPage(page));
  dispatch(setSearch(search));
  return response.data;
};

export const getOneBook = (id) => async (dispatch) => {
  const response = await APIBooks.get(`/${id}`);
  dispatch(setBook(response.data));
  return response.data;
};

export const createBook = async (formData) => {
  let errorMessage = null;
  try {
    const response = await APIBooks.post('/createBook', formData);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error;
      console.assert(errorMessage);
    }
  }
  return {
    errorMessage
  };
}

