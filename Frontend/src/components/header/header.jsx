import { Link } from "react-router-dom"
import "./header.css"
export const Header = () => {
    return (
        <header className="">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="options w-100">

                        <ul>
                            <div>
                                <Link to="/login">user</Link>
                            </div>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Mis_libros">Mis libros</Link></li>
                        </ul>

                        <div className="search">
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}