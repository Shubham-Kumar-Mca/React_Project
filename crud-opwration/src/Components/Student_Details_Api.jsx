import axios from "axios"
import {nanoid} from "nanoid"

export const getData = (params = {})=>{
    return axios.get("http://localhost:3030/Student_Details",{
        params:{
            _limit : params.limit,
            _page:params.page
        }
    })
}
export const viewData = (id)=>{
    return axios.get(`http://localhost:3030/Student_Details/${id}`)
}
export const addStudent = (data = {})=>{
    return axios.post("http://localhost:3030/Student_Details",{
        name : data.name,
        email : data.email,
        phone : data.phone,
        userid : data.userid,
        id : nanoid()
    })
}

export const deleteData = (id)=>{
    return axios.delete(`http://localhost:3030/Student_Details/${id}`)
}

export const updateData = (id, text)=>{
    return axios.put(`http://localhost:3030/Student_Details/${id}`,text)
}