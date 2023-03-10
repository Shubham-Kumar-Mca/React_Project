import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import "./App.css"
import { useContext, useState } from "react";
import { AuhtContext } from "./Context/AuthContext/AuthContextProvider";

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [filter, setFilter] = useState([])
  const { state } = useContext(AuhtContext)
  const { data } = state

  const handelInputSubmit = (value) =>{
    setSearchInput(value)
    const filterData = data.filter(ele=>ele.title.toLowerCase().includes(value.toLowerCase()))
    setFilter(filterData)
  }

  return (
    <>
      <Navbar  handelInputSubmit = {handelInputSubmit} searchInput = {searchInput}/>
      <AllRoutes filter = {filter}/>
    </>
  );
}

export default App;
