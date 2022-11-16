import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/dashboard" element = {<Dashboard />}/>
        <Route path="/dashboard/:id" element = {<SingleRestaurantPage />}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
