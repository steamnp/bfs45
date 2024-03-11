import { useContext, useState } from 'react'
import styles from './menu.module.css'
import { MyContext } from '../../context/my-context'

// const arr = [1, 2, 3]

// console.log([...arr, 4])

// console.log(arr)

function Menu() {
  const menu = useContext(MyContext)

  return (
    <>
      <div>Menu from menu component</div>
      <div className={styles.menu}>
        {menu.map((menuItem, index) => {
          return <span key={index}>{menuItem}</span>
        })}
        <button
          onClick={() => {
            // Spread Operator (...)
            setMenu((prevState) => {
              return [...prevState, 'Service']
            })
            onUpdate([...menu, 'Service'])
          }}
        >
          Update menu
        </button>
      </div>
    </>
  )
}

export default Menu
