import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData } from "../Student_Details_Api"

const EditUser = () => {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState({
        name: "",
        email: "",
        phone: "",
        userid: ""
    })
    const { id } = useParams()

    const handelText = (e) => {
        const { name, value } = e.target
        setText({ ...text, [name]: value })
    }


    const handelApi = (id) => {
        setLoading(true)
        updateData(id,text).then(res => {
            setLoading(false);
            console.log(res)
        }).catch(error=>{
            setLoading(false)
            console.log(error);
        })
    }

    const navigate = useNavigate();


    const handelUpdate = (e) => {
        e.preventDefault();
        handelApi(id);
        alert("Data Update Sucessfully!")
        navigate("/")
    }

    if(loading){
        return <h1 className='loading'>Loading....</h1>
    }
    
    return (
        <div>
            <div className='addStudent'>
                <h1>Edit Student Details</h1>
            </div>
            <form onSubmit={handelUpdate}>
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
                <input type="submit" value="Update Student" />
            </form>
        </div>
    )
}

export default EditUser