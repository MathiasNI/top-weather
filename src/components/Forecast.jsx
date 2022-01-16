import React, {useEffect, useState } from 'react';
import styled from 'styled-components';

// Icons
import AngleRightIcon from '../assets/icons/AngleRightIcon.svg';

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

  padding: 0.6rem;
  margin: 0rem 0rem 0.4rem 0rem;
  height: 4rem;

`;

const LocationName = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  width: 20%;
`;

const ForecastSymbol = styled.img`
  width: 2.5rem;
`;

const ForecastTime = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  color: white;
  font-size: 0.8rem;
`;

const ForecastTemperature = styled.p`
  margin: 0.2rem 0rem 0rem 0.2rem;
  color: white;
`;

const ForecastArrow = styled.img`
  width: 2rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function getSymbolIndex(symbol_code) {
  return paths.findIndex(obj => obj === "./" + symbol_code + ".svg");
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

  if (!weatherDataList) 
  return (
    <ListItem>
      <LocationName> {name}: </LocationName>
    </ListItem>
  );

  return (
    <ListItem>
      <LocationName> {name}: </LocationName>
      {weatherDataList.properties.timeseries && weatherDataList.properties.timeseries.slice(2, 5).map((forecast, index) => (
        <ForecastItem key={index}>
          <ForecastTime>
            {forecast.time.slice(11,16)}
          </ForecastTime>
          <RowWrapper>
            <ForecastSymbol src={svgs[getSymbolIndex(forecast.data.next_1_hours.summary.symbol_code)]}/>
            <ForecastTemperature  
              style={{color: forecast.data.instant.details.air_temperature <= 0 ? "#03A9F1" : "#E42C64"}}
            >
              {Math.round(forecast.data.instant.details.air_temperature)}°
            </ForecastTemperature>
          </RowWrapper>
        </ForecastItem>
      ))}
      <ForecastArrow src={AngleRightIcon}/>
    </ListItem>
  );
}

export default Forecast;
