import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';
import { Register } from '../Page/register/register';
import { MyBooks } from '../Page/deshboard/MyBooks/MyBooks';
import { AppBook } from '../Page/deshboard/appBook/appBook';
import { BookDetail } from '../Page/Book/book';
import IsAuthenticated from '../components/protectRouter';
import RouteSWithNotFount from '../utilities/routes-whith-not-fount';


const Router = () => {

    return (
        <BrowserRouter>
            <RouteSWithNotFount>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                //* rutas protegistas
                <Route element={<IsAuthenticated redirectTo='/login' />}>
                    <Route path="/myBooks" element={<MyBooks />} />
                    <Route path="/addBook" element={<AppBook />} />
                </Route>

                <Route path="/book/:id" element={<BookDetail />} />

            </RouteSWithNotFount>
        </BrowserRouter>
    )
}

export default Router;