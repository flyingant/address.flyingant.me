/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

function PublicRoute({ children, loggedIn, ...rest }) {
  return <Route {...rest} render={() => children} />;
}

export default connect(
  () => ({}),
  () => ({})
)(PublicRoute);
