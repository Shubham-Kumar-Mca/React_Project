import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[data]}) => {
  return <div data-testid="products-container">{products.map((el,index)=>(
    <ProductItem key={index} {...el}/>
  ))}</div>;
};

// export
export default ProductList;
