import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/MyBooks/MyBooks';
import { BookDetail } from '../Page/BookDetail/bookDetail';
import { CreateBook } from '../Page/createBook/createBook';
import IsAuthenticated from '../components/protectRouter';
import RouteSWithNotFount from '../utilities/routes-whith-not-fount';
import { Suspense } from "react";

const Router = () => {

    return (
        <Suspense fallback={<> Cargando...</>}>
            <BrowserRouter>
                <RouteSWithNotFount>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                //* rutas protegistas
                    <Route element={<IsAuthenticated redirectTo='/login' />}>
                        <Route path="/myBooks" element={<MyBooks />} />
                        <Route path='/addBook' element={<CreateBook />}></Route>
                    </Route>
                    //* Rutas para BookDetail
                    <Route path={'/book/:id'} element={<BookDetail />} />
                    <Route path={'/myBooks/book/:id'} element={<BookDetail />} />

                </RouteSWithNotFount>
            </BrowserRouter>
        </Suspense>
    )
}

export default Router;