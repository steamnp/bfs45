import React, { useState } from 'react'
import styles from './button.module.css'


function App() {
    const [count, setCount] =useState(0);
    console.log(count);
  return (
    <div className="container">
      (count)
    <button onClick={() => setCount(count+1)}>Increment </button>
    </div>
  );
}

export default App;