/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import UserActions from '../actions/UserActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'MaYi',
      password: '',
    };
    this.login = this.login.bind(this);
  }

  login() {
    const { actions } = this.props;
    const { password } = this.state;
    actions.login({
      username: 'flyingant',
      password,
    });
  }

  render() {
    const { app } = this.props;
    const { loggedIn, loginError, loginErrorMessage } = app.toJS();
    const { username, password } = this.state;
    if (loggedIn) return <Redirect to={{ pathname: '/home' }} />; // if user is logged in, then redirect to home page
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-64 shadow p-4 m-auto flex flex-col items-center justify-center">
          <img className="mb-8" width="108" height="64" alt="logo" src="https://via.placeholder.com/108x64" />
          <div className="w-full mb-8 px-12">
            <div className="flex items-center border-b-2 border-gray">
              <input
                className="appearance-none w-full py-4 px-4 text-center text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                type="text"
                name="username"
                autoComplete="off"
                value={username}
                disabled
              />
            </div>
          </div>
          <div className="w-full mb-8 px-12">
            <div className="flex items-center border-b-2 border-gray">
              <input
                className="appearance-none w-full py-4 px-4 text-center text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="密码"
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
                value={password}
              />
            </div>
          </div>
          {loginError && (
            <div className="w-full mb-8 px-12">
              <p className="text-red-500">{loginErrorMessage}</p>
            </div>
          )}
          <div className="w-full mb-8 px-12">
            <button className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-2 rounded" type="button" onClick={this.login}>
              登录
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    app: state.app,
  }),
  (dispatch) => ({
    actions: bindActionCreators({ ...UserActions }, dispatch),
  })
)(LoginPage);
