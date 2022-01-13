import React, {useEffect, useState } from 'react';

function Forecast(name, latitude, longitude, altitude) {
  const [weatherDataList, setWeatherDataList] = useState(null);
  const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=' + latitude + '&lon=' + longitude + '&altitude=' + altitude;
  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(function(result) {
        setWeatherDataList(result);
        return console.log(result)
      })
    },[])

  if (!weatherDataList) return <div>Laster...</div>;

  return (
    <p>{name}: {weatherDataList.geometry.type.toString()}</p>
  );
}

export default Forecast;


