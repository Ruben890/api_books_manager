import { Header } from "../../components/header/header";
import { Books } from "../../components/Books/books";
import { useSelector } from "react-redux";
const Home = () => {
    const books = useSelector(state => state.book.books);

    return (
        <>
            <Header />
            <main className="container mt-5">
                <section style={{ display: "flex" }} className="m-2">
                    <Books books={books} />
                </section>
            </main>

        </>

    )
}

export default Home;