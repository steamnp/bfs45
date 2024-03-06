import { useState, useEffect } from 'react'

// Synchronous Code
// Asynchronous Code -> This code will always run at the end of synchronous code

// Promise
// -Pending
// -resolved (success)
// -rejected (failure -> reason (error))

function App() {
  console.log('I am from 1st line of app component')
  const [products, setProducts] = useState(0)

  useEffect(() => {
    console.log('I am inside useEffect and before fetch')
    // To handle promise we either use then method or async await
    // async/await -> ES8

    // WEB API's
    fetch('https://bfs45.gorakhjoshi.com/api/v1/product/all')
      .then((res) => {
        console.log('I am from first then method!')
        return res.json()
      })
      .then((data) => {
        console.log('I am from second then method!')
      })

    // Synchronous Code (blocking code)
    // for (let i = 0; i <= 100000; i++) {
    //   console.log('running!')
    // }

    console.log('I am inside useEffect and after fetch')
  }, [])

  console.log('I am after useEffect hook')

  return <button>{console.log('I am from inside of JSX!')}</button>
}

export default App
