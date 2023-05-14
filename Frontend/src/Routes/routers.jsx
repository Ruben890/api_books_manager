import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/deshboard/MyBooks/MyBooks';
import { AppBook } from '../Page/deshboard/appBook/appBook';
import { BookDetail } from '../Page/Book/book';
import { ProtectRouter } from '../components/protectRouter';
import { useSelector } from "react-redux";



const Router = () => {
    const user = useSelector(state => state.user.user.data);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/myBooks" element={<ProtectRouter user={user} redirectTo='/login '><MyBooks /></ProtectRouter>} />
                <Route path="/addBook" element={<ProtectRouter user={user} redirectTo='/login'><AppBook /></ProtectRouter>} />
                <Route path="/book/:id" element={<BookDetail />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;