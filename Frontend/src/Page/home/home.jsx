import { Header } from "../../components/header/header";
import { Books } from "../../components/Books/books";
import { PaginationBooks } from "../../components/Books/paginationBooks/paginationBooks";
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

                    <div>
                        <PaginationBooks/>
                    </div>
                </section>




            </main>



        </>

    )
}

export default Home;