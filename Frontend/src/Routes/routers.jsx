import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/deshboard/MyBooks/MyBooks';
import { AppBook } from '../Page/deshboard/appBook/appBook';
import { BookDetail } from '../Page/Book/book';
import { ProtectRouter } from '../components/protectRouter';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/myBooks" element={<ProtectRouter><MyBooks /></ProtectRouter>} />
                <Route path="/addBook" element={<ProtectRouter><AppBook /></ProtectRouter>} />
                <Route path="/book/:id" element={<BookDetail />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;