import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/home/home';
import { Login } from '../Page/login/login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;