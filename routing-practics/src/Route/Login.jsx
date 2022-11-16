import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Contxt/ContextProviderApp';


const initial = {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
};

const Login = () => {
  const [text, setText] = useState(initial);
  const {handelLogin, setAuth} = useContext(AppContext);

  const handelAdd = (e) =>{
    const {name, value} = e.target;
    setText({...text,[name]:value})
  };

  const handelSubmit = (e)=>{
    e.preventDefault();
    getData();
  };

  const  navigate = useNavigate();
  const handelNavigate = ()=>{
    setAuth({auth:true})
    navigate("/product")
  };
  
  const getData = async ()=>{
    try {
      const responce = await axios.post("https://reqres.in/api/login",text);
      console.log(responce.data.token);
      handelLogin(responce.data.token)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handelSubmit} style={{
      width:"25%",
      margin:"auto",
      marginTop:"2rem",
      display:"flex",
      flexDirection:"column",
      boxShadow:"0 0 3px 2px lightGray",
      padding:"1.5rem 1rem",
      borderRadius:"5px"
    }}>

      <input style={{
        padding:"10px",
        marginBottom:"1rem",
        outline:"none",
        fontSize:"17px"
      }} type="text" placeholder='Please Enter Email :- eve.holt@reqres.in' name="email" value={initial.email} onChange={e=>handelAdd(e)}/>
      
      <input style={{
        padding:"10px",
        marginBottom:"1rem",
        outline:"none",
        fontSize:"17px"
      }} type="text" placeholder='Please Enter Password :- cityslicka' name="password" value={initial.password} onChange={e=>handelAdd(e)}/>
      
      <input style={{
        padding:"12px",
        cursor:"pointer",
        fontSize:"18px",
        border:"none",
        backgroundColor:"#db3545",
        color:"#fff",
        borderRadius:"5px",
      }} type="submit" onClick={handelNavigate}  value="Login"/>
      
    </form>
  )
}

export default Login