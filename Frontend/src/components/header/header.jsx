import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "../../services/auth/auth.services";
import "./header.css";

export const Header = () => {
    const user = useSelector(state => state.user.user.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const renderUserLink = () => {
        if (user) {
            return (
                <div className="me-3 p-2">
                    <Link to={`/user/${user.id}`}>{user.username}</Link>
                </div>
            );
        } else {
            return (
                <div className="me-3 p-2">
                    <Link to="/login">login</Link>
                </div>
            );
        }
    };

    const renderSignUpLink = () => {
        if (!user) {
            return (
                <li className="p-2">
                    <Link to="/signup">signup</Link>
                </li>
            );
        }
        return null;
    };

    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="options w-100">
                        <ul>
                            {renderUserLink()}
                            {renderSignUpLink()}
                            {user && (
                                <li className="p-2">
                                    <Link to="/myBooks">My Books</Link>
                                </li>
                            )}
                        </ul>
                        <div className="search p-2">
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
