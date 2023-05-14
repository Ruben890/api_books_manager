
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export const ProtectRouter = ({ children }) => {
    const user = useSelector(state => state.user.user.data);

    if (!user) {
        return <Navigate to='/login' replace />;
    }

    return children;
};
