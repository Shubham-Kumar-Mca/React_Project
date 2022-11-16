import { CurrencyRupee } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [data, setData] = useState(null)
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/product/${id}`).then(res=>{
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
  return (
    <>
        <h2 style={{textAlign:"center", marginTop:"2rem"}}>Single Product Page</h2>
        {data && <div style={{
            width:"50%",
            margin:"auto",
            boxShadow:"0 0 3px 2px lightGray",
            borderRadius:"5px"
        }}>
            <div>
                <img src={data.image} alt="" style={{width:"100%", height:"400px", paddingTop:"10px"}}/>
            </div>
            <div style={{padding:"0 10px",backgroundColor:"#e5e9f0"}}>
                <h2 style={{paddingTop:"1rem"}}>{data.title}</h2>
                <p style={{marginTop:"-6px", fontSize:"18px", display:"flex",alignItems:"center"}}>Price : <CurrencyRupee />{data.price}</p>
                <p style={{marginTop:"-10px"}}>Category : {data.category}</p>
                <p style={{marginTop:"-6px", paddingBottom:"1rem"}}>{data.description}</p>
            </div>
        </div>}
    </>
  )
}

export default SingleProduct