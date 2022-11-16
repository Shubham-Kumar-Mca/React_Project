import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import ProductCart from '../Components/ProductCart';
import Style from '../Styles/Product.module.css';

const Product = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParas, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParas.get("page"))||1);
  
  

  const getData = async (page) => {
    try {
      const responce = await axios.get(`http://localhost:8080/product?_page=${page}&_limit=6`);
      console.log(responce.data);
      setData(responce.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData(page);
    setSearchParams({page:page,limit:6})
  }, [page]);

  const handelPaginate = (value)=>{
    setPage(value)
  };
  return (
    <div>
      <div>
        <h2 style={{textAlign :"center", paddingTop:"1rem"}}>I am  Product Page</h2>
        {isLoading && !data && <h2 style={{textAlign :"center"}}>Loading....</h2>}
        {isError && !data && <h2 style={{textAlign :"center"}}>Error....</h2>}
      </div>
      
      <div className={Style.product__css}>
        {data && data.map(e=>(
          <ProductCart {...e} key={e.id}/>
        ))}
      </div>
      <Pagination currentPage = {page} handelPaginate = {handelPaginate}/>
    </div>
  )
}

export default Product