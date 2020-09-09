import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Navigation(props) {
  const { dark, changeTheme } = props;
  return (
    <nav id="dashboard-nav" className="dashboard-nav row">
      <div id="dashboard-nav-total" className="dashboard-nav-total">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div id="dashboard-nav-toggle" className="dashboard-nav-toggle">
        <button onClick={changeTheme} className="theme-toggle-switch">
          <span>
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </span>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
