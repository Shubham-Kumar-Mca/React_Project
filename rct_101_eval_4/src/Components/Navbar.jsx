import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuhtContext } from "../Context/AuthContext/AuthContextProvider";
import { CartAuthContext } from "../Context/CartContext/CartContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = ({handelInputSubmit, searchInput}) => {
  const { state } = useContext(AuhtContext)
  const { cartState } = useContext(CartAuthContext)
  const { addToCart } = cartState
  const { token} = state

  

  const handelInputSearch = (e) =>{
    handelInputSubmit(e.target.value)
  }
  
  return (
    <div className='Navbar-Component'>
      {token &&
        <>
          <h2> {token}</h2>
          <div className="inputBox">
            <input type="text" placeholder="Search Product" value={searchInput} onChange={handelInputSearch} />
          </div>
          
        </>
      }
      <div className="left-Side">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">
          <div className="navbar-bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <             path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <span className='bag-Quantity'>
              <span>{addToCart.length || 0}</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
