import { useState, useEffect } from 'react'

function App() {
  console.log('App component running!')
  const [count, setCount] = useState(0)

  // 2 inputs -> 1st input is the callback function, 2nd is dependency array
  // useEffect will run (at the end) after component rendering/re-rendering is completed
  useEffect(() => {
    console.log('useEffect Hook is running!')
  })

  console.log('Running After useEffect hook')

  return <button onClick={() => setCount((prevValue) => prevValue + 1)}>{count}</button>
}

export default App
