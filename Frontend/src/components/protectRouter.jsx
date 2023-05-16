import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const IsAuthenticated = ({ redirectTo }) => {
  const user = useSelector(state => state.user.user.data);
  return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
};



export default IsAuthenticated;
