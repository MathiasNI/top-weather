import styled from 'styled-components';

// Persistence
import { Locations } from './persistence';

// Components
import { Forecast } from './components';

import './App.css';

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function App() {

  return (
    <div className="App">
        <List>
        {Locations && Locations.map((location, index) => (
          <div key={index}>
            {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
          </div>
        ))}
        </List>
    </div>
  );
}

export default App;
