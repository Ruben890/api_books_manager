import { useSelector } from 'react-redux';
import { Header } from "../../../components/header/header";
import { MenuSidebar } from "../../../components/menuSidebar/menuSidebar";
import { Books } from '../../../components/Books/books';
import "./MyBooks.css"

export const MyBooks = () => {
    const user = useSelector(state => state.user.user.data)
    const books = useSelector(state => state.book.books);
   
    
    return (<>
        <Header />
        <MenuSidebar />

        <main className="container mt-5">
            <section style={{ display: "flex", alignContent: "center" }} className="m-5">
                <Books books={books} />
            </section>
        </main>

    </>)


}