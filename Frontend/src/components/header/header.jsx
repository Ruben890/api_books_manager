import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../services/auth/auth.services";
import "./header.css"
export const Header = () => {
    const user = useSelector(state => state.user.user.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])



    return (
        <header className="">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="options w-100">

                        <ul>
                            <div>
                                {user ? <Link to={`/user/${user.id}`}>{user.username}</Link> : <Link to="/login">login</Link>}
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