import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Header } from "../../../components/header/header";
import { getBooks } from "../../../services/books/books.sevices";
import { MenuSidebar } from "../../../components/menuSidebar/menuSidebar";
import "./MyBooks.css"

export const MyBooks = () => {
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


    return (<>
        <Header />
        <MenuSidebar />
        <main className="conatiner">
            <section>


            </section>
        </main>

    </>)


}