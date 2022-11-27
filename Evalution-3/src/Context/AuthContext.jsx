import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState({ auth: false, token: null })

    const handelLogin = (value) => {
        setIsAuth({ auth: true, token: value })
    }

    const handeLogout = () => {
        setIsAuth({ auth: false, token: null })
    }
    return (
        <AuthContext.Provider value={{ handelLogin, handeLogout, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider