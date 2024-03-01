import './button.css'

function Button({ type, children = 'button' }) {
  return <button className={`button ${type ? `button--${type}` : ''}`}>{children}</button>
}

export default Button

const myName = 'Bikash'

// `` -> backtick

// intro
const intro = `hello ${myName}`

// `hello ${myName}` -> Template Literal
