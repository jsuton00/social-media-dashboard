import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { DashNavigation } from '../components/Navigation';
import OverViewStatusRow from '../components/OverViewStatusRow';
import TotalStatusRow from '../components/TotalStatus';
import { overViewStats, totalStats } from '../utils/appData';
import { logout, isLogin } from '../utils/loginToken';

export default function Dashboard(props) {
  const { changeThemeHandler, dark } = props;
  const [isLoggedIn, setLogin] = useState(isLogin());
  const history = useHistory();
  const handleLogOut = () => {
    if (isLoggedIn === true) {
      logout();
      setLogin(false);
      history.push('/');
    }
  };
  return (
    <div id="dashboard" className="dashboard">
      <header
        id="dashboard-header"
        className="dashboard-header container-fluid"
      >
        <DashNavigation
          changeTheme={changeThemeHandler}
          dark={dark}
          clickLogOut={() => handleLogOut()}
        />
      </header>
      <main id="dashboard-base" className="dashboard-base container-fluid">
        <TotalStatusRow totalResults={totalStats} />
        <OverViewStatusRow overViewResults={overViewStats} />
      </main>
    </div>
  );
}
