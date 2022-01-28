
import * as S from './styles';

// Persistence/Locations
import { Byfjellene } from './../../persistence';

// Components
import { Header } from './../../components';
import { Forecast } from './../../components';
import { Footer } from './../../components';

function Home() {
  return (
    <>
      <Header/>
      <S.Forecasts>
      {Byfjellene && Byfjellene.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </S.Forecasts>
      <Footer/>
    </>
  );
}

export default Home;
