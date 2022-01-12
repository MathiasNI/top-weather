import React, {useEffect, useState } from 'react';

function Ulriken() {
  const [weatherDataList, setWeatherDataList] = useState(null);
  useEffect(()=>{
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.37747&lon=5.38713&altitude=643')
    .then(response => response.json())
    .then(function(result) {
      setWeatherDataList(result);
      return console.log(result)
    })
    },[])

  if (!weatherDataList) return <div>Laster...</div>;

  return (
    <p>Ulriken: {weatherDataList.geometry.type.toString()}</p>
  );
}

export default Ulriken;
