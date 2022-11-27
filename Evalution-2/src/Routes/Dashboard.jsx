import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const {isAuth, handelLogout} = useContext(AuthContext)
  const [data, setData] = useState(null)
  const [total, setTotal] = useState(null)
  const [page, setPage] = useState(1)

  const handelApi = (page)=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`).then(res=>{
      setData(res.data.data);
      setTotal(res.data.totalPages);
    }).catch(err=>{
      console.log(err);
    })
  }
  const navigate = useNavigate()
  const hanelLogOut = ()=>{
    handelLogout()
    navigate("/")
  }

  useEffect(()=>{
    handelApi(page)
  },[page])
  console.log(page);
  return (
    <div className="dashboardPage">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={hanelLogOut}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{isAuth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data = {data} />
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages = {total} currentPages = {page} handelPageChange = {(page)=>setPage(page)} />
      </div>
    </div>
  );
}

export default Dashboard;
