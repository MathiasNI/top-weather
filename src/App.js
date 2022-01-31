import { Routes, Route } from "react-router-dom";

// Pages
import { Byfjellene } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Byfjellene />} />
      <Route path="/byfjellene" element={<Byfjellene />} />
    </Routes>
  );
}

export default App;
