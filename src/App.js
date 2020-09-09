import React, { useState } from 'react';
import TotalStatusRow from './components/TotalStatus';
import OverViewStatusRow from './components/OverViewStatusRow';
import Navigation from './components/Navigation';
import { totalStats, overViewStats } from './utils/appData.js';

function App() {
  const [dark, setDark] = useState(false);
  const changeThemeHandler = () => setDark(!dark);

  return (
    <div id="app" className={`theme ${dark ? 'theme-dark' : 'theme-default'}`}>
      <div id="dashboard" className="dashboard">
        <header
          id="dashboard-header"
          className="dashboard-header container-fluid"
        >
          <Navigation changeTheme={changeThemeHandler} dark={dark} />
        </header>
        <main id="dashboard-base" className="dashboard-base container-fluid">
          <TotalStatusRow totalResults={totalStats} />
          <OverViewStatusRow overViewResults={overViewStats} />
        </main>
      </div>
    </div>
  );
}

export default App;
