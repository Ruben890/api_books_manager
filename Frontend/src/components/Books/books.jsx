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
                <div className="card">
                    <img src={book.image} alt={book.title} />
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>

                <p>{book.publisher}</p>
                <p>{book.year}</p>
            </div>
        )
    })



}