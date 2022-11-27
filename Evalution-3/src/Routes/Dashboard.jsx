import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const {handeLogout,isAuth} = useContext(AuthContext)
  const {token} = isAuth

  const [data, setData] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  

  const handelAPi = (page)=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=desc`).then(res=>{
      setData(res.data.data);
      console.log(res.data.data);
      setTotal(res.data.totalPages)
      setIsLoading(false)
    }).catch(err=>{
      setIsLoading(false)
      console.log(err);
    })
  }

  const handelSortLowToHigh = () =>{
    const sorting = data.sort((a,b)=>a.price - b.price)
    setData([...data,sorting])
  }

  const handelSortHighToLow = () =>{
    const sorting = data.sort((a,b)=>b.price - a.price)
    setData([...data,sorting])
  }

  const navigate = useNavigate()
  const haldlingLogout = ()=>{
    handeLogout()
    navigate("/")
  }

  useEffect(()=>{
    handelAPi(page)
  },[page])



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={haldlingLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" onClick={handelSortLowToHigh}>Sort low to high</button>
      <button data-testid="high-to-low" onClick={handelSortHighToLow}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination totalPages = {total} currentPages = {page} handelPagination = {(page)=>setPage(page)}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading && <Loader />}
        {/* Product Listing, remember to show loading indicator when API is loading */}
        {data && <ProductList products = {data}/>}
      </div>
   
    </div>
  );
}

export default Dashboard;
