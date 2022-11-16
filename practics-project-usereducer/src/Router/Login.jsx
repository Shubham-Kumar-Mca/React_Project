import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Loading from '../Context/Loading'
import LoginComponents from '../Context/LoginComponents'
import LogoutComponents from '../Context/LogoutComponents'

const Login = () => {
  const {state, dispatch} = useContext(AppContext)
  
  return (
    <div>
      {state.isLoading && <Loading />}
      {!state.isLoading && !state.isAuth && <LoginComponents state = {state} dispatch = {dispatch}/>}
      {!state.isLoading && state.isAuth && <LogoutComponents state = {state} dispatch = {dispatch}/>}
    </div>
  )
}

export default Login