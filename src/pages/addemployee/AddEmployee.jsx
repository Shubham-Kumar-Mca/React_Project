import React, { useState } from 'react';
import "./addEmployee.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
  firstName : "",
  lastName : "",
  email : "",
  department : "",
  salary : ""
}

const AddEmployee = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const navigate = useNavigate()
  const handelAddEmployee = (e) =>{
    const {name, value} = e.target;
    setUserInfo({...userInfo, [name] : value})
  }

  const handelAddEmployeeFormSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3030/employees", userInfo).then(res=>{
      alert("Employee Added Sucessfully!")
      navigate("/dashboard")
    }).catch(err=>{
      console.log(err);
    })
    setUserInfo(initialState)
  }
  return (
    <div className='Add_Employee__container'>
      <form onSubmit={handelAddEmployeeFormSubmit}>
        <input type="text" placeholder='Enter First Name' name='firstName' value={userInfo.firstName} onChange={handelAddEmployee}/>
        <input type="text" placeholder='Enter Last Name' name='lastName'value={userInfo.lastName} onChange={handelAddEmployee}/>
        <input type="text" placeholder='Enter Email' name='email' value={userInfo.email} onChange={handelAddEmployee}/>
        <select name="department" value={userInfo.department} onChange={handelAddEmployee}>
          <option value="">Select Tag with Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
        <input type="number" placeholder='Enter Salary' name='salary' value={userInfo.salary} onChange={handelAddEmployee}/>
        <input type="submit" value="Add Employee" />
      </form>
    </div>
  )
}

export default AddEmployee