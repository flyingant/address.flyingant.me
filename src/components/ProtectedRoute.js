/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, ...rest }) {
  const checkIfRedirect = () => {
    return loggedIn ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  };
  return <Route {...rest} render={checkIfRedirect} />;
}

export default connect(
  (state) => ({
    loggedIn: state.app.getIn(['loggedIn']),
  }),
  () => ({})
)(ProtectedRoute);
