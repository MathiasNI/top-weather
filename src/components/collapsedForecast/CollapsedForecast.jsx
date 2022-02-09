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

const CollapsedForecast= (name, weatherDataList) => {
  return (
    <S.Row>
      <S.Location> {name} </S.Location>
      {weatherDataList.properties.timeseries && weatherDataList.properties.timeseries.slice(2, 3).map((forecast, index) => (
        <S.Forecast key={index}>
          <S.Row>
          <S.SymbolDescription> Vær </S.SymbolDescription>
          <S.TemperatureDescription> Temp. </S.TemperatureDescription>
          <S.PrecipitationDescription> Nedbør </S.PrecipitationDescription>
          </S.Row>
          <S.Row>
            <S.Symbol src={svgs[getSymbolIndex(forecast.data.next_6_hours.summary.symbol_code)]}/>
            <S.Temperature>
              <S.TemperatureSpan style={{ color: Math.round(forecast.data.next_6_hours.details.air_temperature_max) <= 0 ? "#03A9F1" : "#E42C64"}}>
                {Math.round(forecast.data.next_6_hours.details.air_temperature_max)}° 
              </S.TemperatureSpan>/ 
              <S.TemperatureSpan style={{ color: Math.round(forecast.data.next_6_hours.details.air_temperature_min) <= 0 ? "#03A9F1" : "#E42C64"}}>
                {Math.round(forecast.data.next_6_hours.details.air_temperature_min)}° 
              </S.TemperatureSpan>
            </S.Temperature>
            <S.Precipitation style={{color: forecast.data.next_6_hours.details.precipitation_amount <= 0 ? "#2F333C" : "#6EC9F0"}}>
              {Math.round(forecast.data.next_6_hours.details.precipitation_amount)}<S.PrecipitationSpan>mm</S.PrecipitationSpan>
            </S.Precipitation>
          </S.Row>
        </S.Forecast>
      ))}
      <S.StatusArrow src={AngleRightIcon}/>
    </S.Row>
  );
}

export default CollapsedForecast;
