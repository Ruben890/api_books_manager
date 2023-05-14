import { Header } from "../../components/header/header";
import { Books } from "../../components/Books/books";
const Home = () => {

    return (
        <>
            <Header />
            <main className="container mt-5">
                <section style={{ display: "flex", flexWrap:"wrap"}} className="m-2">
                    <Books />
                </section>
            </main>

        </>

    )
}

export default Home;