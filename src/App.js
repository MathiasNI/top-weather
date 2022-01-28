import styled from 'styled-components';

// Persistence/Locations
import { Byfjellene } from './persistence';

// Components
import { Header } from './components';
import { Forecast } from './components';
import { Footer } from './components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  max-width: 60rem;
  margin: auto;
`;

function App() {
  return (
    <>
      <Header/>
      <List>
      {Byfjellene && Byfjellene.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </List>
      <Footer/>
    </>
  );
}

export default App;
