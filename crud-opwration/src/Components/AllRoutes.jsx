import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import User from './User/User'
import AddStudent from './User/AddStudent'
import EditUser from './User/EditUser'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<HomePage />}/>
            <Route path='/Add-Student_Details/:id' element = {<User />}/>
            <Route path='/Student_Details' element = {<AddStudent />}/>
            <Route path='/Edit-Student/:id' element = {<EditUser />}/>
        </Routes>
    </>
  )
}

export default AllRoutes