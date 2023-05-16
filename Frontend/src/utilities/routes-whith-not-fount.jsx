import { Route, Routes } from "react-router";
import { Error_404 } from "../Errors/404/404";
const RouteSWithNotFount = ({ children }) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Error_404 />} />
        </Routes >
    )
}

export default RouteSWithNotFount