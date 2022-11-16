import React from 'react'

const Screen = ({calculate}) => {
  return (
    <div className='screen'>{calculate.num?calculate.num:calculate.res}</div>
    // <input type="text" value={cal} readOnly />
  )
}

export default Screen