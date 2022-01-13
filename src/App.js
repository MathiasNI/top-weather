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
        {Locations && Locations.map((location) => (
          Forecast(location.name, location.latitude, location.longitude, location.altitude)
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
