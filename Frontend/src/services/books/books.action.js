import { GetBooks } from "./books.sevices";
import { setBook, setPage, setSearch } from "../../features/boosk/books.slice"

export const fetchBooks = (page = 0, search = "") => async dispatch => {
  try {
    const books = await GetBooks(page, search);
    dispatch(setBook(books));
    dispatch(setPage(page));
    dispatch(setSearch(search));
  } catch (error) {
    console.log(error);
  }
}