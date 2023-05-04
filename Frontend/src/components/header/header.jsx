import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../services/auth/auth.services";
import "./header.css"
export const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    console.log(user)



    return (
        <header className="">
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="options w-100">

                        <ul>
                            <div>
                                {/* <Link to="/login">user</Link> */}

                                {user.map(user => {

                                    return (
                                        <li key={user.id}>
                                            <Link to={`/user/${user.id}`}>{user.first_name}</Link>
                                        </li>
                                    )
                                })}
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