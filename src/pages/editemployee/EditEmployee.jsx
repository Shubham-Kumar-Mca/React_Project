import React, { useEffect, useState } from 'react';
import "./editEmployee.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();
  const [singleEmployee, setSingleEmployee] = useState({})
  const navigate = useNavigate()

  const handelUpdateEmployee = (e) =>{
    const {name, value} = e.target;
    setSingleEmployee({...singleEmployee, [name] : value})
  }

  const handelUpdateEmployeeFormSubmit = (e) =>{
    e.preventDefault()
    axios.patch(`http://localhost:3030/employees/${id}`, singleEmployee).then(res=>{
      alert("Data Update Sucessfully!")
      navigate("/dashboard")
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:3030/employees/${id}`).then(res => {
      console.log(res.data);
      setSingleEmployee(res.data);
    })
  }, [])
  return (
    <div className='Add_Employee__container'>
      <form onSubmit={handelUpdateEmployeeFormSubmit}>
        <input type="text" placeholder='Enter First Name' name='firstName' value={singleEmployee.firstName} onChange={handelUpdateEmployee} />
        <input type="text" placeholder='Enter Last Name' name='lastName' value={singleEmployee.lastName} onChange={handelUpdateEmployee} />
        <input type="text" placeholder='Enter Email' name='email' value={singleEmployee.email} onChange={handelUpdateEmployee} />
        <select name="department" value={singleEmployee.department} onChange={handelUpdateEmployee}>
          <option value="">Select Tag with Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
        <input type="number" placeholder='Enter Salary' name='salary' value={singleEmployee.salary} onChange={handelUpdateEmployee} />
        <input type="submit" value="Update Employee" />
      </form>
    </div>
  )
}

export default EditEmployee