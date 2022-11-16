import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div><h1>Logo</h1></div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar