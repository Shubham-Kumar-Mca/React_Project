import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const initialState = {
    email : "",
    password : ""
}

const Login = () => {
    const [user, setUser] = useState(initialState)
    const navigate = useNavigate()
    const handelInputChange = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name] : value})
    }

    const handelInputSubmit = (e) =>{
        e.preventDefault();
        axios.post("https://reqres.in/api/login",user).then(res=>{
            console.log(res.data.token);
            navigate("/dashboard")
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <div className='login-container'>
        <form onSubmit={handelInputSubmit}>
            <input type="text" placeholder='Enter Email: eve.holt@reqres.in' name='email' value={user.email} onChange={handelInputChange}/>
            <input type="password" placeholder='Enter Password: cityslicka' name='password' value={user.password} onChange={handelInputChange}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login