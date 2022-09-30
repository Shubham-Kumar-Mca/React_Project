import React from 'react'
import CenterContainer from './Container/CenterContainer'
import LeftContainer from './Container/LeftContainer'
import RightContainer from './Container/RightContainer'
import "./NewsContainer.css"

const NewsContainer = () => {
  

  return (
    <div className='NewsContainer'>
      <div className="left">
        <LeftContainer />
      </div>

      <div className="center">
        <CenterContainer />
      </div>

      <div className="right">
        <RightContainer />
      </div>
    </div>
  )
}

export default NewsContainer