import { useSelector } from 'react-redux';
import { Header } from '../../components/header/header';
import { Books } from '../../components/Books/books';
import { PaginationBooks } from '../../components/paginationBooks/paginationBooks';

export const MyBooks = () => {
    const user = useSelector(state => state.user.user.data)

    return (<>

        <Header />
        <main className="container">
            <section className="content">
                <div style={{ display: "flex", flexWrap: "wrap" }} className="m-2">
                    <Books user={user} />
                </div>
            </section>
        </main>

        <footer style={{ marginTop: "auto" }}>
            <PaginationBooks />
        </footer>
    </>)


}