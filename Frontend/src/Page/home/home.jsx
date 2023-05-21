
import { Books } from "../../components/Books/books";
import { PaginationBooks } from "../../components/paginationBooks/paginationBooks";
import { Header } from "../../components/header/header";
const Home = () => {

    return (
        <>
            <header>
                <Header />
            </header>
            <main className="container-fluid mt-5">
                <section >
                    <div style={{ display: "flex", flexWrap: "wrap" }} className="m-2">
                        <Books />
                    </div>
                </section>
            </main>

            <footer>
                <PaginationBooks />
            </footer>


        </>

    )
}

export default Home;