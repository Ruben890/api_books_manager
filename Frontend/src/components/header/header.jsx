import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../services/auth/auth.service";
import "./header.css";

export const Header = () => {
    const user = useSelector(state => state.user.user.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {user ? <Link className="nav-link active" aria-current="page" to={`/user/${user.id}`}>{user.username}</Link> : <Link className="nav-link active" aria-current="page" to="/login">login</Link>}

                            </li>
                            <li className="nav-item">
                                {!user && <Link to="/signup" className="nav-link">signup</Link>}
                            </li>
                            {user && (<li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to='myBooks' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Books
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/myBooks'>My Books</Link></li>
                                    <li><Link className="dropdown-item" to='/addBook'>addBook</Link></li>
                                </ul>
                            </li>)}

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};
