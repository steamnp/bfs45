import { createContext, useState } from 'react'
import Home from './pages/home'
import React from 'react'
import { MyContext } from './context/my-context'

export const menuData = ['Home', 'About', 'Store', 'Contact']

function App() {
  const [menu, setMenu] = useState(menuData)

  function onUpdate(updatedData) {
    setMenu(updatedData)
  }
  return (
    <MyContext.Provider value={menu}>
      <div className="container">
        <div>Menu from App component</div>
        {menu.map((menuItem, index) => {
          return <span key={index}>{menuItem}</span>
        })}
        <Home />
      </div>
    </MyContext.Provider>
  )
}

export default App
