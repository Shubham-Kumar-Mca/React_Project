import React from 'react'
import styled from "styled-components"
import {CategoriesData} from "../data"
import CategoriesItem from './CategoriesItem'


const Container = styled.div`
  display: flex;
  padding:10px;
  justify-content: space-between;
`;


const Categories = () => {
  return (
    <Container>
      {CategoriesData.map(item=>(
        <CategoriesItem item = {item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories