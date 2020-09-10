import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/loginToken';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <React.Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
