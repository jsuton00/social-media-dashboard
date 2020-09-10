import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LoginForm(props) {
  const { clickLogin } = props;
  return (
    <div id="login-form" className="login-form form">
      <div className="login-form-header row">
        <h5 className="login-form-title">
          Login to Your Social Media Dashboard
        </h5>
      </div>
      <div className="login-form-body">
        <div className="login-form-control row">
          <input
            id="username"
            name="username"
            type="text"
            className="username form-control"
            placeholder="Username or email"
          />
        </div>
        <div className="login-form-control row">
          <input
            id="password"
            name="password"
            type="password"
            className="username form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="login-form-footer row">
        <button
          id="btnLogin"
          name="btnLogin"
          type="button"
          onClick={clickLogin}
          className="login-button btn-primary form-control"
        >
          Login
          <span>
            <FontAwesomeIcon icon={faSignInAlt} />
          </span>
        </button>
      </div>
    </div>
  );
}
