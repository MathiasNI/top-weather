import React, {useEffect, useState } from 'react';
import * as S from './styles';

// Components
import { CollapsedForecast } from '..';
import { ExpandedForecast } from '..';

const Forecast = (name, latitude, longitude, altitude) => {
  const [weatherDataList, setWeatherDataList] = useState(null);
  const [avelancheDataList, setAvelancheDataList] = useState(null);
  const [showAdvancedForecast, setShowAdvancedForecast] = useState(false);
  
  // Met.no
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

    // Varsom.no
    useEffect(()=>{
      const url = 'https://api01.nve.no/hydrology/forecast/avalanche/v6.0.1/api/AvalancheWarningByCoordinates/Simple/' + latitude + '/' + longitude + '/1/';
      fetch(url)
        .then(response => response.json())
        .then(function(result) {
          setAvelancheDataList(result);
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
      {showAdvancedForecast && ExpandedForecast(name, weatherDataList, avelancheDataList[0])}
    </S.Forecast>
  );
}

export default Forecast;
