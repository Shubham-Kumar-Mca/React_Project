import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const ContextProviderApp = ({children}) => {
    const [auth, setAuth] = useState({auth:false, token:null});

    const handelLogin = (token)=>{
        setAuth({auth:true, token:token})
    };

    const handelLogout = () =>{
        setAuth({auth:false, token:null})
    };
    
    return (
        <AppContext.Provider value={{auth,handelLogin,handelLogout,setAuth}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProviderApp