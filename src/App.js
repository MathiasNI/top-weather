import React from 'react';
import {Routes, Route} from 'react-router-dom'

// Pages
import { Byfjellene } from './pages';
import { Klatrefelt } from './pages';
import { Skisteder } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/top-weather/" exact element={<Byfjellene />} />
      <Route path="/top-weather/byfjellene" element={<Byfjellene />} />
      <Route path="/top-weather/klatrefelt" element={<Klatrefelt />} />
      <Route path="/top-weather/skisteder" element={<Skisteder />} />
    </Routes>
  );
}

export default App;
