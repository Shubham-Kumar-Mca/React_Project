import React, { useContext, useState } from "react";
import { CheckOut, RemoveTocart } from "../Context/CartContext/action";
import { CartAuthContext } from "../Context/CartContext/CartContextProvider";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartAuthContext)
  const { addToCart } = cartState


  const handelRemoveToCart = (value)=>{
    cartDispatch(RemoveTocart(value))
  }

  const handelOrder = ()=>{
    window.confirm("Are you sure you want to place this order?") ? cartDispatch(CheckOut()):console.log("okay");
  }

  /* Calculation of Final Total */
  const result = (addToCart) => {
    return addToCart.reduce((acc, element) => acc + element.price, 0)
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE (INR)</th>
            <th>REMOVE FROM CART</th>
          </tr>
        </thead>
        <tbody>
          {addToCart.map((item)=>(
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td className="RemoveCart" onClick = {()=>handelRemoveToCart(item.id)}>Remove From Cart</td>
            </tr>
          ))}
          <tr>
            <th>FINAL PRICE</th>
            <th>{result(addToCart)}</th>
          </tr>
        </tbody>

      </table>

      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"1rem"
      }}>
        <p>No Exchange | No Refunds</p>
        <button style={{
          padding:"10px 25px",
          cursor:"pointer"
        }} onClick = {handelOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
