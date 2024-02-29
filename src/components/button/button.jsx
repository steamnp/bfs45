import React from 'react'

function Button({buttonText}) {
  return (
    <button style={{ backgroundColor: bgColor, border:'none', color: 'white'}}>{buttonText}</button>
  )
}

export default Button