import React from 'react';
import * as S from './styles';

// Persistence/Locations
import * as L from '../../persistence';

// Components
import { Header } from '../../components';
import { Forecast } from '../../components';
import { Footer } from '../../components';

const Byfjellene = () => {
  return (
    <>
      <Header location={"Byfjellene"}/>
      <S.Forecasts>
      {L.Byfjellene && L.Byfjellene.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </S.Forecasts>
      <Footer />
    </>
  );
}

export default Byfjellene;