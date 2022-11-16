import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../Contxt/ContextProviderApp'

const PrivateRouter = ({children}) => {
    const {auth} = useContext(AppContext);
    if(!auth.auth){
        return <Navigate to="/login"/>
    }
   return children
}

export default PrivateRouter