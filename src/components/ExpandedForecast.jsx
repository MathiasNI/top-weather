import React from 'react';
import styled from 'styled-components';

// Icons
import AngleDownIcon from '../assets/icons/AngleDownIcon.svg';

// Weather symbols
const reqSvgs = require.context ( '../assets/symbols/', true, /\.svg$/ )
const paths = reqSvgs.keys ()
const svgs = paths.map( path => reqSvgs ( path ) )

const LocationName = styled.h4`
  color: white;
  padding: 0.2rem;
  width: 40%;
`;

const Description = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 20%;
`;

const TimeDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.8rem;
  color: white;
  width: 20%;
`;

const SymbolDescription = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  width: 10%;
  `;

const Time = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: left;
  font-size: 0.9rem;
  color: white;
  width: 20%;
`;

const Symbol = styled.img`
  width: 13%;
  max-height: 50px;
`;

const Temperature = styled.p`
  margin: 0.2rem 0rem 0rem 0.4rem;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  width: 20%;
`;

const Precipitation = styled.p`
margin: 0.2rem 0rem 0rem 0.4rem;
text-align: center;
font-size: 0.9rem;
color: white;
width: 20%;
`;

const Wind = styled.p`
margin: 0.2rem 0rem 0rem 0.4rem;
text-align: center;
font-size: 0.9rem;
color: white;
width: 20%;
`;

const StatusArrow = styled.img`
  width: 2rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function getSymbolIndex(symbol_code) {
  return paths.findIndex(obj => obj === "./" + symbol_code + ".svg");
}

function ExpandedForecast(name, weatherDataList) {
  return (
    <>
      <RowWrapper>
        <LocationName> {name} </LocationName>
        <StatusArrow src={AngleDownIcon}/>
      </RowWrapper>
      <RowWrapper>
        <TimeDescription>Tid</TimeDescription>
        <SymbolDescription>Vær</SymbolDescription>
        <Description>Temp.</Description>
        <Description>Nedbør</Description>
        <Description>Vind(kast)</Description>
      </RowWrapper>
      {weatherDataList.properties.timeseries && weatherDataList.properties.timeseries.slice(2, 8).map((forecast, index) => (
      <RowWrapper key={index}>
        <Time>{forecast.time.slice(11,13)}</Time>
        <Symbol src={svgs[getSymbolIndex(forecast.data.next_1_hours.summary.symbol_code)]}/>
        <Temperature  
          style={{ color: forecast.data.instant.details.air_temperature <= 0 ? "#03A9F1" : "#E42C64"}}
        >
          {Math.round(forecast.data.instant.details.air_temperature)}°
        </Temperature>
        <Precipitation
          style={{color: forecast.data.next_1_hours.details.precipitation_amount_max <= 0 ? "#2F333C" : "#6EC9F0"}}
        >
          {forecast.data.next_1_hours.details.precipitation_amount_min}-{forecast.data.next_1_hours.details.precipitation_amount_max} mm
        </Precipitation>
        <Wind>
          {Math.round(forecast.data.instant.details.wind_speed)} ({Math.round(forecast.data.instant.details.wind_speed_of_gust)})
        </Wind>
      </RowWrapper>
      ))}
    </>
  );
}

export default ExpandedForecast;
