import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStudent } from "../Student_Details_Api"

const AddStudent = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    phone: "",
    userid: "",
  })
  const [loading, setLoading] = useState(false)

  const handelText = (e) => {
    const { name, value } = e.target
    setText({ ...text, [name]: value })
  }

  const handelApi = () => {
    setLoading(true)
    addStudent(text).then(res => {
      setLoading(false);
      console.log(res.data)
    }).catch(error => {
      setLoading(false);
      console.log(error);
    })
  }

  const navigate = useNavigate();


  const handelSubmit = (e) => {
    e.preventDefault();
    handelApi();
    alert("Student Details Added Sucessfully!")
    navigate("/")
  }
  
  if (loading) {
    return <h1 className='loading'>Loading....</h1>
  }
  return (
    <div>
      <div className='addStudent'>
        <h1>Add Student</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="name"
          value={text.name}
          placeholder="Enter Student Name"
          onChange={handelText}
        />
        <br />
        <input
          type="email"
          name="email"
          value={text.email}
          placeholder="Enter Student Email Id"
          onChange={handelText}
        />
        <br />
        <input
          type="number"
          name="phone"
          value={text.phone}
          placeholder="Enter Student Phone Number"
          onChange={handelText}
        />
        <br />
        <input
          type="text"
          name="userid"
          value={text.userid}
          placeholder="Enter Student User Id"
          onChange={handelText}
        />
        <br />
        <input type="submit" value="Add Student" />
      </form>
    </div>
  )
}

export default AddStudent