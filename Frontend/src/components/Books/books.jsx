import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from "../../services/books/books.sevices";
export const Books = () => {
    const books = useSelector(state => state.book.books);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks())
            .then(() => setLoading(false));
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return books.data.map(book => {
        return (
            <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.year}</p>
            </div>
        )
    })



}