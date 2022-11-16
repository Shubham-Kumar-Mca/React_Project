import React from 'react'

const Pagination = ({currentPage, handelPaginate}) => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        marginTop:"1rem",
        marginBottom:"1rem"
    }}>
        <button style={{fontSize:"18px"}} disabled = {currentPage === 1?true:false} onClick={()=>handelPaginate(currentPage - 1)}>Prev</button>
        <button style={{fontSize:"18px"}}>{currentPage}</button>
        <button style={{fontSize:"18px"}} onClick={()=>handelPaginate(currentPage + 1)}>Next</button>
    </div>
  )
}

export default Pagination