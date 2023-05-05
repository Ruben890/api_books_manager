import { Header } from "../../components/header/header"
import { Link } from "react-router-dom"
import "./MyBooks.css"
export const MyBooks = () => {
    return (<>
        <Header />

        <div  className="MenuSidebar">
            <nav>
                <ul className="p-2 mt-5">
                    <li className="p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/mybooks">My Books</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/addbook">Add Book</Link>
                    </li>
                    <li className="p-2">
                        <Link to='/update-book'>Update Book</Link>
                    </li>
                </ul>
            </nav>

        </div>
    </>)


}