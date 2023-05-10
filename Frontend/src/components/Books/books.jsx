import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from "../../services/books/books.sevices";
import { Link } from "react-router-dom";
import "./books.css"
export const Books = ({books}) => {
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
            <Link to={`book/${book.id}`} key={book.id}>
                <div  className="cardBooks rounded shadow  bg-body-tertiary m-3" style={{ width: "12rem" }}>
                    <img src={book.image} alt={book.title} className="card-img rounded" />
                    <div className="into rounded">
                        <h1><span>{book.title}</span>-({book.year})</h1>
                        <p>{book.author}</p>
                    </div>
                </div>
            </Link>

        )
    })



}