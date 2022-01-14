import styled from 'styled-components';

// Icons

// Persistence
import { Locations } from './persistence';

// Components
import { Forecast } from './components';

const Body = styled.div`
`;

const Header = styled.h1`
  color: #FFFFFF;
  font-size: 2rem;
  padding: 0.4rem 0rem 0rem 0.6rem;
  margin: 0rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;

function App() {
  return (
    <Body>
      <Header> top-weather </Header>
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
