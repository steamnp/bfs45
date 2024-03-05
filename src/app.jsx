import { useState } from 'react'

function App() {
  // Array Destructuring
  const [count, setCount] = useState(0)
  // count -> state variable
  // setCount -> state updating function (it will update count)

  console.log('running! app component')

  // Whenever state is updated in react, component will re-render (run again)

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default App
