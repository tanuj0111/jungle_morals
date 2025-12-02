import './App.css';
import Home from './components/Home';
import WhatWeDo from './components/whatwedo.jsx';
import Characters from './components/Characters.jsx';
import TopSec from './components/TopSec.jsx';
import AboutUs from './components/AboutUs.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopSec />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
