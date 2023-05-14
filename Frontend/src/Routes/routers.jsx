import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/deshboard/MyBooks/MyBooks';
import { AppBook } from '../Page/deshboard/appBook/appBook';
import { BookDetail } from '../Page/Book/book';
import { ProtectRouter } from '../components/protectRouter';



const Router = () => {
    const user = useSelector(state => state.user.user.data);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                //* rutas protegistas
                <Route element={<ProtectRouter user={user} redirectTo='/login' />}>
                    <Route path="/myBooks" element={<MyBooks />} />
                    <Route path="/addBook" element={<AppBook />} />
                </Route>

                <Route path="/book/:id" element={<BookDetail />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;