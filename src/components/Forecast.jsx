import React, {useEffect, useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #2F333C;
  border-radius: 0.5rem;

  padding: 0.8rem;
  margin: 0rem 0rem 0.4rem 0rem;
`;

const LocationName = styled.div`
  color: white;
  padding: 0.2rem;
  width: 30%;
`;

const ForecastItem = styled.div`
  color: white;
  padding: 0.2rem;
  width: 5%;

`;

function ForecastPerHour(timeseries) {
  return(
  <>
  {timeseries && timeseries.slice(1, 5).map((forecast, index) => (
    <ForecastItem key={index}>
      {Math.round(forecast.data.instant.details.air_temperature).toString()}
    </ForecastItem>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  if (!weatherDataList) return <div>Laster...</div>;

  return (
    <ListItem>
      <LocationName> {name}: </LocationName>
      {ForecastPerHour(weatherDataList.properties.timeseries)}
    </ListItem>
  );
}

export default Forecast;
