import React, {useEffect, useState } from 'react';
import * as S from './styles';

// Components
import { CollapsedForecast } from '..';
import { ExpandedForecast } from '..';

function Forecast(name, latitude, longitude, altitude) {
  const [weatherDataList, setWeatherDataList] = useState(null);
  const [showAdvancedForecast, setShowAdvancedForecast] = useState(false);
  
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
    <S.Forecast>
      <S.Location> {name} </S.Location>
    </S.Forecast>
  );

  return (
    <S.Forecast onClick={() => {
      setShowAdvancedForecast(!showAdvancedForecast);
      }}>
      {!showAdvancedForecast && CollapsedForecast(name, weatherDataList)}
      {showAdvancedForecast && ExpandedForecast(name, weatherDataList)}
    </S.Forecast>
  );
}

export default Forecast;
