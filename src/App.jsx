import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Details from './pages/details/details'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:name" element={<Details />}></Route>
      
    </Routes>
  );
 
}

export default App