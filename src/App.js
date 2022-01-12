import React, {useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.37747&lon=5.38713&altitude=643')
    .then(response => response.json())
    .then(function(result) {
      setData(result);
      return console.log(result)
    })
    },[])

  if (!data) return <div>Laster...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data.geometry.type.toString()}</p>
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
