import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { viewData } from "../Student_Details_Api"

const User = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const handelApi = ()=>{
        setLoading(true)
        viewData(id).then(res => {
            setLoading(false)
            setData(res.data)
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }
    useEffect(() => {
        handelApi(id)
    }, [id]);

    if(loading){
        return <h1 className='loading'>Loading....</h1>
    }
    
    return (
        <div className='viewDetails'>
            <div className='viewData'>
                <div>
                    <h3>Name</h3>
                </div>
                <div className='seconDiv'>
                    <h3>{data.name}</h3>
                </div>
            </div>

            <div className='viewData'>
                <div>
                    <h3>Email Id</h3>
                </div>
                <div className='seconDiv'>
                    <h3>{data.email}</h3>
                </div>
            </div>

            <div className='viewData'>
                <div>
                    <h3>Phone Number</h3>
                </div>
                <div className='seconDiv'>
                    <h3>{data.phone}</h3>
                </div>
            </div>

            <div className='viewData'>
                <div>
                    <h3>User Id</h3>
                </div>
                <div className='seconDiv'>
                    <h3>{data.userid}</h3>
                </div>
            </div>
        </div>
    )
}

export default User