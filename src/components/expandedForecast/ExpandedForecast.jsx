import React from 'react';
import * as S from './styles';

// Persistence
import { Beauforts, WindDirections } from './../../persistence';

// Icons
import AngleDownIcon from './../../assets/icons/AngleDownIcon.svg';

// Weather symbols
const reqSvgs = require.context ( './../../assets/symbols/', true, /\.svg$/ )
const paths = reqSvgs.keys ()
const svgs = paths.map( path => reqSvgs ( path ) )

function getSymbolIndex(symbol_code) {
  return paths.findIndex(obj => obj === "./" + symbol_code + ".svg");
}

const ExpandedForecast = (name, weatherDataList) => {
  return (
    <>
      <S.Row>
        <S.Location> {name} </S.Location>
        <S.StatusArrow src={AngleDownIcon}/>
      </S.Row>
      <S.Row>
        <S.TimeDescription>Tid</S.TimeDescription>
        <S.SymbolDescription>Vær</S.SymbolDescription>
        <S.TemperatureDescription>Temp.</S.TemperatureDescription>
        <S.PrecipitationDescription>Nedbør</S.PrecipitationDescription>
        <S.WindDescription>Vind(kast)</S.WindDescription>
        <S.WindTextDescription>Vindbeskrivelse</S.WindTextDescription>
      </S.Row>
      {weatherDataList.properties.timeseries && weatherDataList.properties.timeseries.slice(2, 14).map((forecast, index) => (
      <S.Row key={index}>
        <S.Time>{forecast.time.slice(11,13)}</S.Time>
        <S.Symbol src={svgs[getSymbolIndex(forecast.data.next_1_hours.summary.symbol_code)]}/>
        <S.Temperature  
          style={{ color: Math.round(forecast.data.instant.details.air_temperature) <= 0 ? "#03A9F1" : "#E42C64"}}
        >
          {Math.round(forecast.data.instant.details.air_temperature)}°
        </S.Temperature>
        <S.Precipitation
          style={{color: forecast.data.next_1_hours.details.precipitation_amount_max <= 0 ? "#2F333C" : "#6EC9F0"}}
        >
          {forecast.data.next_1_hours.details.precipitation_amount_min} - {forecast.data.next_1_hours.details.precipitation_amount_max}
        </S.Precipitation>
        <S.Wind>
          {Math.round(forecast.data.instant.details.wind_speed)} ({Math.round(forecast.data.instant.details.wind_speed_of_gust)})
        </S.Wind>
        <S.WindText>
          {Beauforts(forecast.data.instant.details.wind_speed)} fra {WindDirections(forecast.data.instant.details.wind_from_direction)}
        </S.WindText>
      </S.Row>
      ))}
    </>
  );
}

export default ExpandedForecast;
