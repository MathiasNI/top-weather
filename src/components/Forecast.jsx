import React, {useEffect, useState } from 'react';
import styled from 'styled-components';

// Weather symbols
const reqSvgs = require.context ( '../assets/symbols/', true, /\.svg$/ )
const paths = reqSvgs.keys ()
const svgs = paths.map( path => reqSvgs ( path ) )

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

const LocationName = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  width: 20%;
`;

const ForecastIcon = styled.img`
  width: 2.5rem;
`;

const ForecastText = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  color: white;
`;

function getSymbolIndex(symbol_code) {
  return paths.findIndex(obj => obj === "./" + symbol_code + ".svg");
}

function ForecastPerHour(timeseries) {
  return(
  <>
    {timeseries && timeseries.slice(2, 5).map((forecast, index) => (
      <ForecastItem key={index}>
        <ForecastText>
          {forecast.time.slice(11,13)}
        </ForecastText>
        <RowWrapper>
          <ForecastIcon src={svgs[getSymbolIndex(forecast.data.next_1_hours.summary.symbol_code)]}/>
          <ForecastText  
            style={{color: forecast.data.instant.details.air_temperature <= 0 ? "#03A9F1" : "#E42C64"}}
          >
            {Math.round(forecast.data.instant.details.air_temperature)}°
          </ForecastText>
        </RowWrapper>
        <RowWrapper>
          <ForecastText  style={{color: "#74B1D8"}}>
            {forecast.data.next_1_hours.details.precipitation_amount}
          </ForecastText>
          <ForecastText style={{color: "#BEC7D7"}}>
            {Math.round(forecast.data.instant.details.wind_speed)}
            ({Math.round(forecast.data.instant.details.wind_speed_of_gust)})
          </ForecastText>
        </RowWrapper>
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
