import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext)
    return isAuth.auth?(children):<Navigate to="/login" />
}

export default PrivateRoute;
