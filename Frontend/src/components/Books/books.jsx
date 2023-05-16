import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from "../../services/books/books.sevices";
import { Link } from "react-router-dom";

import "./books.css";

export const Books = ({ user }) => {
    const books = useSelector(state => state.book.books); // Estado de los libros
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
        dispatch(getBooks())
            .then(() => setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        // Filtrar libros por el ID del usuario si el usuario y los libros están disponibles
        if (books.data && user) {
            const filteredBooks = books.data.filter(book => book.userId === user.id);
            setUserBooks(filteredBooks);
        } else {
            // Mostrar todos los libros si no hay usuario disponible
            setUserBooks(books.data);
        }
    }, [books.data, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return userBooks.map(book => (
        <Link to={`book/${book.id}`} key={book.id}>
            <div className="cardBooks rounded shadow bg-body-tertiary m-3" style={{ width: "12rem" }}>
                <img src={book.image} alt={book.title} className="card-img rounded" />
                <div className="into rounded">
                    <h1><span>{book.title}</span>-({book.year})</h1>
                    <p>{book.author}</p>
                </div>
            </div>
        </Link>
    ));
};
