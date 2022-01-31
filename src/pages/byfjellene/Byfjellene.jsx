import React from 'react';
import * as S from './styles';

// Persistence/Locations
import { Byfjellene as Location} from '../../persistence';

// Components
import { Header } from '../../components';
import { Forecast } from '../../components';
import { Footer } from '../../components';

function Byfjellene() {
  return (
    <>
      <Header location={"Byfjellene"}/>
      <S.Forecasts>
      {Location && Location.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </S.Forecasts>
      <Footer/>
    </>
  );
}

export default Byfjellene;
