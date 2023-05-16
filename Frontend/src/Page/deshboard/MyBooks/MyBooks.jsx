import { useSelector } from 'react-redux';
import { Header } from "../../../components/header/header";
import { Books } from '../../../components/Books/books';
import "./MyBooks.css"

export const MyBooks = () => {
    const user = useSelector(state => state.user.user.data)

    return (<>
        <Header />

        <main className="container mt-5">
            <section style={{ display: "flex", alignContent: "center", flexWrap: "wrap" }} className="m-5">
                <Books user={user} />
            </section>
        </main>
    </>)


}