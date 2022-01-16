import styled from 'styled-components';

// Persistence
import { Locations } from './persistence';

// Components
import { NavBar } from './components';
import { Forecast } from './components';

const Body = styled.div`
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;

function App() {
  return (
    <Body>
      <NavBar/>
      <List>
      {Locations && Locations.map((location, index) => (
        <div key={index}>
          {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
        </div>
      ))}
      </List>
    </Body>
  );
}

export default App;
