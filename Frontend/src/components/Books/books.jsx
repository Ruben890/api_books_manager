import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, getOneBook } from "../../services/books/books.sevices";
import { Link } from "react-router-dom";
import "./books.css"
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
            <>
                <Link to={`book/${getOneBook(book.id)}`}>
                    <div key={book.id} className="cardBooks rounded shadow  bg-body-tertiary m-3" style={{ width: "12rem" }}>
                        <img src={book.image} alt={book.title} className="card-img rounded" />
                        <div className="into rounded">
                            <h1><span>{book.title}</span>-({book.year})</h1>
                            <p>{book.author}</p>
                            <p>{book.publisher}</p>
                        </div>
                    </div>
                </Link>
            </>

        )
    })



}