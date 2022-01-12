import React, {useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.37747&lon=5.38713&altitude=643'
    )
    .then(response => response.json())
    .then(result => setData(result))
    }

  useEffect(()=>{
    getData()
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.toString()}
          {data && data.length>0 && data.map((item)=><p>{item}</p>)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
