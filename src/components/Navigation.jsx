import { faMoon, faSignOutAlt, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function LoginNavigation(props) {
  const { dark, changeTheme } = props;

  return (
    <nav id="login-navigation" className="login-nav row">
      <div id="login-navigation-title" className="login-nav-title">
        <h1>Social Media Dashboard</h1>
      </div>
      <div id="dashboard-nav-toggle" className="login-nav-toggle row">
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

export function DashNavigation(props) {
  const { dark, changeTheme, clickLogOut } = props;
  return (
    <nav id="dashboard-nav" className="dashboard-nav row">
      <div id="dashboard-nav-total" className="dashboard-nav-total">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div id="dashboard-nav-toggle" className="dashboard-nav-toggle row">
        <button onClick={changeTheme} className="theme-toggle-switch">
          <span>
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </span>
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          id="btnLogout"
          name="btnLogout"
          onClick={clickLogOut}
          className="logout-button"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </nav>
  );
}
