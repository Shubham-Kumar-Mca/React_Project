import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFailure, getRequest, loginSucess } from "../Context/AuthContext/action";
import { AuhtContext } from "../Context/AuthContext/AuthContextProvider";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const { state, dispatch } = useContext(AuhtContext)
  const { authStatus, isError } = state
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handelOnChange = (e) => {
    const { type, value } = e.target
    setUser({ ...user, [type]: value })
  }

  const handelLogin = () => {
    dispatch(getRequest())
    axios.post("https://reqres.in/api/login", user).then(res => {
      dispatch(loginSucess(res.data.token))
    }).catch(err => {
      dispatch(getFailure())
    })
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus) {
      navigate("/")
    }
  }, [authStatus])

  return (
    <>
      {isError ? <h2 style={{ marginTop: "5rem", textAlign: "center" }}>Something went wrong. please refresh.</h2> : <div style={{
        width: "25%",
        margin: "auto",
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        padding: "35px 45px",
        borderRadius: "10px",
        backgroundColor: "white"

      }}>
        <input style={{ padding: "10px", marginTop: "10px" }} type="email" value={user.email} onChange={handelOnChange} />
        <input style={{ padding: "10px", marginTop: "10px" }} type="password" value={user.password} onChange={handelOnChange} />
        <button style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }} disabled={authStatus ? true : false} onClick={handelLogin}>Login</button>
      </div>}

    </>
  );
};

export default Login;
