import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2 className='crud'>React <Link to="/" className='crd'> CRUD </Link>with Mock API</h2>
        <Link to="Student_Details" className='Student_Details'>Add Student</Link>
    </div>
  )
}

export default Navbar