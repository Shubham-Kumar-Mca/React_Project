import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { getData, getFailure, getRequest } from "../Context/AuthContext/action";
import { AuhtContext } from "../Context/AuthContext/AuthContextProvider";
import { AddToCart, UpdateStatus } from "../Context/CartContext/action";
import { CartAuthContext } from "../Context/CartContext/CartContextProvider";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const Home = ({ filter }) => {
  const { state, dispatch } = useContext(AuhtContext)
  const { cartDispatch, cartState } = useContext(CartAuthContext)
  const { status } = cartState
  const { data, isLoading } = state

  const [filterData, setFilterData] = useState([])

  const handelApi = () => {
    dispatch(getRequest())
    axios.get("https://api.escuelajs.co/api/v1/products").then(res => {
      dispatch(getData(res.data))
    }).catch(err => {
      dispatch(getFailure())
    })
  }

  useEffect(() => {
    handelApi()
  }, [])

  

  const handelAddToCart = (item) => {
    cartDispatch(AddToCart(item))
    cartDispatch(UpdateStatus(item.id))
  }

  return (
    isLoading ? <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "3rem" }}>Loading....</h2> :
      <div className="Container">
        {filter.length > 0 ? <>
          {filter.map(item=>(
            <div key={item.id} className="inside-Container-div">
            <div style={{ height: "320px" }}>
              <img src={item.category.image} alt="" width="100%" height="250px" />
              <h3>{item.title}</h3>
              <h3>Rs. {item.price}</h3>
            </div>
            <div>
              <button disabled={status.includes(item.id)} style={{
                padding: "10px 25px",
                cursor: "pointer",
                marginTop: "30px"
              }} onClick={() => handelAddToCart(item)}>Add to cart</button>
            </div>
          </div>
          ))}
        </> : data.map(item => (
          <div key={item.id} className="inside-Container-div">
            <div style={{ height: "320px" }}>
              <img src={item.category.image} alt="" width="100%" height="250px" />
              <h3>{item.title}</h3>
              <h3>Rs. {item.price}</h3>
            </div>
            <div>
              <button disabled={status.includes(item.id)} style={{
                padding: "10px 25px",
                cursor: "pointer",
                marginTop: "30px"
              }} onClick={() => handelAddToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

  );
};

export default Home;
