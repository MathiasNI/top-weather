// Persistence
import { Locations } from './persistence';

// Components
import { Forecast } from './components';

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Locations && Locations.map((location, index) => (
          <div key={index}>
            {Forecast(location.name, location.latitude, location.longitude, location.altitude)}
          </div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
