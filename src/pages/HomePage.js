/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import UserActions from '../actions/UserActions';
import AddressActions from '../actions/AddressActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.loadAddress();
  }

  logout() {
    const { actions } = this.props;
    actions.logout();
  }

  render() {
    const { app } = this.props;
    const { addressBook } = app.toJS();
    return (
      <>
        <div className="container m-auto">
          <div className="w-full flex flex-col items-center">
            <h2 className="m-8">MaYi&apos;s Address Book</h2>
            {addressBook.map((address) => {
              return (
                <div className="w-full flex flex-col my-4 p-4 border-b border-gray-400">
                  <h4>{address.name}</h4>
                  <p>{address.address}</p>
                </div>
              );
            })}
          </div>
          <div className="Setting" onClick={this.logout}>
            <h4>登出</h4>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    app: state.app,
  }),
  (dispatch) => ({
    actions: bindActionCreators({ ...UserActions, ...AddressActions }, dispatch),
  })
)(DashboardPage);
