import { useSelector } from 'react-redux';
import { Header } from '../../components/header/header';
import { Books } from '../../components/Books/books';
import { PaginationBooks } from '../../components/paginationBooks/paginationBooks';

export const MyBooks = () => {
    const user = useSelector(state => state.user.user.data)

    return (<>

        <Header />
        <main className="container mt-5">
            <section className="m-5">
                <div style={{ display: "flex", alignContent: "center", flexWrap: "wrap" }} className="m-2">
                    <Books user={user} />
                </div>

                <div>
                    <PaginationBooks />
                </div>
            </section>
        </main>
    </>)


}