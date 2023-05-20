import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useParams } from "react-router";
import { getOneBook } from "../../services/books/books.sevices";
import { Header } from "../../components/header/header";
import { Link } from "react-router-dom";
export const BookDetail = () => {
    const [loading, setLoading] = useState(true);
    const book = useSelector(state => state.book.books.data);
    const dispatch = useDispatch();
    const params = useParams()
    
    useEffect(() => {
        dispatch(getOneBook(params.id))
            .then(() => setLoading(false));
    }, [dispatch, params.id]);
    console.log(book)

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <>

            <header>
                <nav className="p-3">
                    <Link to='/' className="text-white btn btn-primary"><i className="bi bi-arrow-return-left"></i>  Back</Link>
                </nav>
            </header>

            <main className="container p-3">
                <section className="d-flex p-3 border border-primary rounded">
                    <div className="border-end  border-primary pe-3">
                        <img src={book.image} alt={book.title} className="rounded border border-dark " height='350px' />
                        <table className="table table-striped-columns mt-3">
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>{book.title}</td>
                                </tr>
                                <tr>
                                    <th>Author</th>
                                    <td>{book.author}</td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td>{book.year}</td>
                                </tr>
                                <tr>
                                    <th>Publisher</th>
                                    <td>{book.publisher}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="m-5" style={{ overflow: "auto" }}>
                        <p>{book.description}</p>
                    </div>
                </section>


            </main>


        </>
    )


}