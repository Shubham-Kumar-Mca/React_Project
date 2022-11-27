import { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState({auth:false, token:null})

    const handelLogin = (token)=>{
        setIsAuth({auth:true, token:token})
    }
    const handelLogout = ()=>{
        setIsAuth({auth:false, token:null})
    }

    return(
        <AuthContext.Provider value={{isAuth, handelLogin, handelLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
