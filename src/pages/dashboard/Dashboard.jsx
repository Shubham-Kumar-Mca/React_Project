import React, { useEffect, useState } from 'react';
import "./dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [emaployeeData, setEmployeeData] = useState([])
  const navigate = useNavigate();
  const [serchByName, setSearchByName] = useState("")
  const [sortBySalary, setSortBySalary] = useState("asc")
  const [department, setDepartment] = useState("")

  //Calculating Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = emaployeeData?.slice(startIndex, endIndex);


  /* Previous and Next button Cliking */
  const handelPrevClicking = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handelNextClicking = () => {
    if (currentPage < emaployeeData.length / itemsPerPage) {
      setCurrentPage(currentPage + 1)
    }
  }


  /* Delete Employee When user click delete button */
  const handelDeleteEployee = (id) => {
    axios.delete(`http://localhost:3030/employees/${id}`).then(res => {
      getDataFromAPI()
    }).catch(err => {
      console.log(err);
    })
  }

  //filter by Department and salary
  const getFilterdAPI = (department, sortBySalary) => {
    if (department === "") {
      getDataFromAPI()
    } else {
      axios.get(`http://localhost:3030/employees?department=${department}&_sort=salary&_order=${sortBySalary}`).then(res => {
        setEmployeeData(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  //Geeting Data when user came here (this page) first Time
  const getDataFromAPI = () => {
    axios.get("http://localhost:3030/employees").then(res => {
      setEmployeeData(res.data)
    }).catch(err => {
      console.log(err);
    })
  }



  //Serach By User First Name
  const handelSearchByFname = (serchByName) => {
    console.log(serchByName);
    if(serchByName===""){
      getDataFromAPI()
    }else{
      const filterdData = emaployeeData.filter(employee=>employee.firstName.toLowerCase().includes(serchByName.toLowerCase()))
      setEmployeeData(filterdData)
    }
  }
  useEffect(() => {
    getFilterdAPI(department, sortBySalary)
  }, [department, sortBySalary])


  useEffect(() => {
    getDataFromAPI()
  }, [])

  useEffect(()=>{
    handelSearchByFname(serchByName)
  },[serchByName])



  return (
    <div className='dashboard__container'>
      <h2>Employee Management Software</h2>
      <div className='d-flex'>
        <div>
          <button className='addEmployee__btn' onClick={() => navigate("/addemployee")}>Add Employee</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
        <div>
          <input type="text" placeholder='Search By User First Name' value={serchByName} onChange={(e) => setSearchByName(e.target.value)} />
        </div>
        <div className='filterd-section'>
          <select name="department" onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Filter By Department</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
          </select>

          <select name="salary" onChange={e => setSortBySalary(e.target.value)}>
            <option value="">Sort By Salary</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {
        currentData && <>

          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((employee, index) => (
                <tr key={index}>
                  <td>{startIndex + index + 1}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.department}</td>
                  <td className='modify__btn'>
                    <Link to={`/editemployee/${employee.id}`}>Edit</Link>
                    <button onClick={() => handelDeleteEployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }

      <div className='btn__prev_And_next'>
        <button onClick={handelPrevClicking} disabled={currentPage === 1}>Prev</button>
        <p>{currentPage}</p>
        <button onClick={handelNextClicking} disabled={currentPage === Math.ceil(emaployeeData.length / itemsPerPage)}>Next</button>
      </div>
    </div>
  )
}

export default Dashboard




