import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import { Byfjellene } from './pages';
import { Klatrefelt } from './pages';
import { Skisteder } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Byfjellene />} />
      <Route path="/byfjellene" element={<Byfjellene />} />
      <Route path="/klatrefelt" element={<Klatrefelt />} />
      <Route path="/skisteder" element={<Skisteder />} />
    </Routes>
  );
}

export default App;
