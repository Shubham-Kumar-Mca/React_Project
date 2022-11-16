import React from 'react'

const getStyleName = (btn) => {
  const className = {
    '=': "equals",
    'x': "opt",
    '-': "opt",
    '+': "opt",
    '/': "opt",
    'C': "clear"
  }
  return className[btn]
}

const Button = ({ value, handelClick }) => {
  return (
    <button name='button' className={`${getStyleName(value)} button`} onClick={(e) => handelClick(value, e)}>{value}</button>
  )
}

export default Button