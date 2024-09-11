import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BakuInfo from './components/BakuInfo';
import FamousLandmark from './components/FamousLandmark';
import OtherLandmarks from './components/OtherLandmarks';
import ShakespeareInfo from './components/ShakespeareInfo';
import FamousWorks from './components/FamousWorks';
import GlobeTheatre from './components/GlobeTheatre';
import Baku from './components/Baku';
import Shakespeare from './components/Shakespeare';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/baku">О Баку</Link>
            </li>
            <li>
              <Link to="/shakespeare">О Шекспире</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/baku" element={<Baku />} />
          <Route path="/shakespeare" element={<Shakespeare />} />
          <Route path="/baku-info" element={<BakuInfo />} />
          <Route path="/famous-landmark" element={<FamousLandmark />} />
          <Route path="/other-landmarks" element={<OtherLandmarks />} />
          <Route path="/shakespeare-info" element={<ShakespeareInfo />} />
          <Route path="/famous-works" element={<FamousWorks />} />
          <Route path="/globe-theatre" element={<GlobeTheatre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;