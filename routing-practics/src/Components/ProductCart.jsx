import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = ({ id, image, title, category, price }) => {
  return (
    <div style={{
      border: "1px solid red",
      textAlign: "center",
      backgroundColor: "#e5e9f0",
      paddingBottom:"1rem"
    }}>
      <Link to={`/product/${id}`}>
        <div><img src={image} alt="" /></div>
      </Link>
      <div style={{ padding: "0 10px", height:"180px" }}>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{price}</p>
      </div>

      <div style={{display:"flex", justifyContent : "center", alignItems:"center",gap:"10px" }}>
        <button style={{padding:".5rem 1rem",cursor:"pointer"}}>Buy</button>
        <button style={{padding:".5rem 1rem",cursor:"pointer"}}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCart