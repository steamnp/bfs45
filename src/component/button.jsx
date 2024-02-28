function Button({ buttonText = 'Button', bgColor = 'red' }) {
  const btnStyle = { backgroundColor: bgColor, border: 'none', color: 'white' }
  // number (NaN)
  // string
  // array
  // object (null)
  // undefined
  // boolean

  return <button style={btnStyle}>{buttonText}</button>
}

export default Button
