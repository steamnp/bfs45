import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {v4  as uuidv4} from 'uuid'; 
import style from './Style.module.scss';


function Home() {
 
  const [countries, setCountries] = useState();
  const [error, setError] = useState('');
 
  useEffect(() => {
 
  const getAllCountries = async()=>{
    try {
      const res = await fetch ('https://restcountries.com/v3.1/all')
      const data = await res.json()
      
      if (data.length > 0){
        setCountries(data)
      } else {
        setError('Country cannot be found!!')
      }
    } 
    catch (error){
      setError(error.message)
  }}
  
  getAllCountries()
 
  }, [])
  console.log(uuidv4);

  return (
    <div className={style.home}>
    {countries && countries.map((country) => (
        <div key = {uuidv4()}>
          <Link to={`/${country.name.common}`}>
            <img className={style.img}
            src = {country.flags.svg}/>
          <p className={style.name}>{country.name.common}</p>  
        </Link>
        </div>
      ))}
      {error && <div>{error}</div>}
    </div>
  )
}
 
export default Home;

