import { Header } from "../../components/header/header";
import { Books } from "../../components/Books/books";
const Home = () => {
    return (
        <>
            <Header />
            <main className="container mt-5">
                <Books/>
            </main>

        </>

    )
}

export default Home;