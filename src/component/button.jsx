import styles from './button.module.css'

function Button({ type, children = 'Button' }) {
  return <button className={`${styles.button} ${type ? styles[`button--${type}`] : ''}`}>{children}</button>
}

export default Button

const myName = 'Bikash'

// `` -> backtick

// intro
const intro = `hello ${myName}`

// `hello ${myName}` -> Template Literal
