import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import { Byfjellene } from './pages';
import { Klatrefelt } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Byfjellene />} />
      <Route path="/byfjellene" element={<Byfjellene />} />
      <Route path="/klatrefelt" element={<Klatrefelt />} />
    </Routes>
  );
}

export default App;
