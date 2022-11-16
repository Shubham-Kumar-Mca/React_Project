import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const {handelLogin} = useContext(AuthContext)
  const [text, setText] = useState({
    email:"",
    password:""
  })

  const handelOnChnage = (e) =>{
    const {type, value} = e.target
    setText({...text,[type]:value})
  }
  const navigate = useNavigate()

  const handelAPI = ()=>{
    axios.post("https://reqres.in/api/login",text).then(res=>{
      console.log(res.data.token);
      handelLogin(res.data.token)
      navigate("/dashboard")
    }).catch(err=>{
      console.log(err);
    })
  }

  const handelSubmit = (e)=>{
    e.preventDefault()
    handelAPI()
  }
  
  return (
    <div className="loginPage">
      <form data-testid="login-form" onSubmit={handelSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={text.email} onChange = {handelOnChnage}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={text.password}
              onChange = {handelOnChnage}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/" className="link">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
