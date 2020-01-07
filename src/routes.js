/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { USER } from './actions/ActionTypes';
import { LOCALSTORAGE_KEY_FOR_CREDENTIAL } from './constants';

export default function Routers(props) {
  const { store } = props;
  const cachedUserData = localStorage.getItem(LOCALSTORAGE_KEY_FOR_CREDENTIAL);
  if (cachedUserData) {
    store.dispatch({
      type: USER.AUTH_CHECK,
      payload: JSON.parse(cachedUserData),
    });
  }
  return (
    <Router forceRefresh>
      <Switch>
        <PublicRoute path="/login">
          <LoginPage />
        </PublicRoute>
        <ProtectedRoute path="/">
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/home">
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
