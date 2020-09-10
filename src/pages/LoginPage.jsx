import React from 'react';
import { useHistory } from 'react-router';
import LoginForm from '../components/LoginForm';
import { LoginNavigation } from '../components/Navigation';
import { login } from '../utils/loginToken';

export default function LoginPage(props) {
  const { changeThemeHandler, dark } = props;
  const history = useHistory();
  const handleLogin = () => {
    login();
    history.push('/dashboard');
  };
  return (
    <div id="dashboard-login" className="dashboard login-page">
      <header
        id="login-page-header"
        className="login-page-header container-fluid"
      >
        <LoginNavigation changeTheme={changeThemeHandler} dark={dark} />
      </header>
      <main
        id="dashboard-login-base"
        className="dashboard-base login-page-main container-fluid"
      >
        <div id="login-form-section" className="login-form-section row">
          <LoginForm clickLogin={() => handleLogin()} />
        </div>
      </main>
    </div>
  );
}
