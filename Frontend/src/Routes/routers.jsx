import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/deshboard/MyBooks/MyBooks';
import { AppBook } from '../Page/deshboard/appBook/appBook';
import { BookDetail } from '../Page/Book/book';
import IsAuthenticated from '../components/protectRouter';


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                //* rutas protegistas
                <Route element={<IsAuthenticated redirectTo='/login' />}>
                    <Route path="/myBooks" element={<MyBooks />} />
                    <Route path="/addBook" element={<AppBook />} />
                </Route>

                <Route path="/book/:id" element={<BookDetail />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;