import styled from 'styled-components';

// Persistence
import { Locations } from './persistence';

// Components
import { NavBar } from './components';
import { Forecast } from './components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;

const Footer = styled.div`
  padding: 0.4rem;
  color: #7B7E83;
  font-size: 0.8rem;
  text-align: center;
`;

function App() {
  return (
    <>
      <NavBar/>
      <List>
      {Locations && Locations.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </List>
      <Footer> Mathiasni <a style= {{color: '#7B7E83'}} href="https://github.com/MathiasNI/top-weather">(GitHub)</a></Footer>
    </>
  );
}

export default App;
