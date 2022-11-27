import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const {handelLogin, isAuth} = useContext(AuthContext)
  const {auth} = isAuth
  const [text, setText] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  })

  const handelApi = ()=>{
    axios.post("https://reqres.in/api/login",text).then(res=>{
      handelLogin(res.data.token); 
      console.log('login');
    }).catch(err=>{
      console.log(err);
    })
  }
  const navigate = useNavigate()
  if(auth){
    navigate("/dashboard")
  }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={e=>{
        e.preventDefault()
        handelApi()
      }}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value={text.email} onChange = {e=>setText(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={text.password}
              onChange = {e=>setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
