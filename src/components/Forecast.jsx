import React, {useEffect, useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 11rem;

  background-color: white;
  border-radius: 0.5rem;
  margin: 0.4rem;
  filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0,0,0,0.1));
`;

const ListItemText = styled.div`
  color: black;
`;

function NextFiveHours(timeseries) {
  var test = timeseries.slice(0,4)
  return(
  <>
  {timeseries && timeseries.slice(1, 5).map((forecast) => (
    <p>{forecast.data.instant.details.air_pressure_at_sea_level.toString()}</p>
  ))}
  </>
  );
}


function Forecast(name, latitude, longitude, altitude) {
  const [weatherDataList, setWeatherDataList] = useState(null);
  
  useEffect(()=>{
    const url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=' + latitude + '&lon=' + longitude + '&altitude=' + altitude;
    fetch(url)
      .then(response => response.json())
      .then(function(result) {
        setWeatherDataList(result);
        return console.log(result)
      })
    },[])

  if (!weatherDataList) return <div>Laster...</div>;

  return (
    <ListItem>
      <ListItemText> {name}: {NextFiveHours(weatherDataList.properties.timeseries)} </ListItemText>
    </ListItem>
  );
}

export default Forecast;
