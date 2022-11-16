import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getData, deleteData } from "./Student_Details_Api"

const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    // const [total, setTotal] = useState()
    const [loading, setLoading] = useState(false)

    const handelApi = (page) => {
        setLoading(true)
        getData({ page, limit: 5 }).then(res => {
            setLoading(false)
            setData(res.data)
            console.log(res);
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }

    const handelDelete = (id)=>{
        setLoading(true)
        deleteData(id).then(()=>{
            setLoading(false)
            handelApi(page)
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }
    useEffect(() => {
        handelApi(page)
    }, [page])

    if(loading){
        return <h1 className='loading'>Loading....</h1>
    }
    return (
        <div>
            <div className='homePage'>
                <h1>Home page</h1>
            </div>
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Userid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.userid}</td>
                                <td className='button'>
                                    <Link to={`/Add-Student_Details/${user.id}`} className='view'>View</Link>
                                    <Link to={`/Edit-Student/${user.id}`} className='edit'>Edit</Link>
                                    <button className='delete' onClick={()=>handelDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className='pageButton'>
                <button className='prev' disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <button className='page'>{page}</button>
                <button className='next' onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default HomePage