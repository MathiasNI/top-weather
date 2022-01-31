import React from 'react';
import * as S from './styles';

// Icons
import AngleRightIcon from './../../assets/icons/AngleRightIcon.svg';

// Weather symbols
const reqSvgs = require.context ( './../../assets/symbols/', true, /\.svg$/ )
const paths = reqSvgs.keys ()
const svgs = paths.map( path => reqSvgs ( path ) )

function getSymbolIndex(symbol_code) {
  return paths.findIndex(obj => obj === "./" + symbol_code + ".svg");
}

function CollapsedForecast(name, weatherDataList) {
  return (
    <S.Row>
      <S.Location> {name} </S.Location>
      {weatherDataList.properties.timeseries && weatherDataList.properties.timeseries.slice(2, 5).map((forecast, index) => (
        <S.Forecast key={index}>
          <S.Time>
            {forecast.time.slice(11,13)}
          </S.Time>
          <S.Row>
            <S.Symbol src={svgs[getSymbolIndex(forecast.data.next_1_hours.summary.symbol_code)]}/>
            <S.Temperature  
              style={{color: Math.round(forecast.data.instant.details.air_temperature) <= 0 ? "#03A9F1" : "#E42C64"}}
            >
              {Math.round(forecast.data.instant.details.air_temperature)}°
            </S.Temperature>
          </S.Row>
        </S.Forecast>
      ))}
      <S.StatusArrow src={AngleRightIcon}/>
    </S.Row>
  );
}

export default CollapsedForecast;
