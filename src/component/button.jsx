import styles from './button.module.css'; // Import CSS module

function Button({ type, children = 'button' }) {
  return (

    <button className={`${styles.button} ${type ? styles[`button--${type}`] : ''}`}>{children}</button>
       
  );

}

export default Button;

const myName = 'Bikash'

// `` -> backtick

// intro
const intro = `hello ${myName}`

// `hello ${myName}` -> Template Literal
