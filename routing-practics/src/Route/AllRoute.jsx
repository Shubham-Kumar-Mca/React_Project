import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import PrivateRouter from './PrivateRouter'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/product' element = {<PrivateRouter><Product /></PrivateRouter>}/>
        <Route path='/cart' element = {<PrivateRouter><Cart /></PrivateRouter>}/>
        <Route path='/product/:id' element = {<SingleProduct />}/>
      </Routes>
    </div>
  )
}

export default AllRoute