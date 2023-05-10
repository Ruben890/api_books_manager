import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { getOneBook } from "../../services/books/books.sevices";

export const BookDetail = () => {
    const book = useSelector(state => state.book.books);
    const dispatch = useDispatch();
    const params = useParams()

    useEffect(() => {
        dispatch(getOneBook(params.id));
    }, [dispatch, params.id]);
   

    console.log(book)


}