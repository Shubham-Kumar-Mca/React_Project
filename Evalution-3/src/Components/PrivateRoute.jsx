import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext)
    const {auth} = isAuth
    
    return auth?(children):<Navigate to="/login"/>
    
}

export default PrivateRoute;
