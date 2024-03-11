import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import {useEffect} from 'react'

function Pagetitle(){
  useEffect(() => {document.title = 'Countries of the World'},[])
}

function App() {
  Pagetitle()
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:name" element={<Detail />}></Route>
    </Routes>
  );
 
}

export default App