import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Contxt/ContextProviderApp'
import Style from "../Styles/Navbar.module.css"

const Navbar = () => {
    const {auth, handelLogout} = useContext(AppContext);

  return (
    <div className={Style.navbar__css}>
        <div>
            <h1>Sasta FlipKart</h1>
        </div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                {auth.auth?<li style={{display:"flex", fontSize:"20px"}}>
                    Cart <span style={{display:"flex",justifyContent:"center",fontSize:"13px", backgroundColor:"red",padding:"2px", color:"#fff", height:"18px", width:"18px", borderRadius:"50%"}}>0</span>
                </li>:<li><Link to="/cart">Cart</Link></li>}
                    
                {auth.auth?<li><Link style={{
                    padding:"0px 10px 5px 10px",
                    backgroundColor:"#db3545",
                    color:"#fff",
                    borderRadius:"5px"
                }} onClick = {handelLogout}>Logout</Link></li>:null}
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar