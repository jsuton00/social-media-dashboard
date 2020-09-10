import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/loginToken';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin() ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
