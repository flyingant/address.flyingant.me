/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import BusySpinner from '../components/BusySpinner';

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
    const { app, ui } = this.props;
    const { loading } = ui.toJS();
    const { addressBook } = app.toJS();
    return (
      <>
        <BusySpinner busy={loading} />
        <div className="container m-auto font-sans pb-8">
          <div className="w-full flex flex-col items-center">
            <h2 className="w-full p-4 text-center">MaYi&apos;s Address Book</h2>
            {addressBook.map((address) => {
              return (
                <div key={address.name} className="w-full flex flex-col my-4 p-4 border-b border-gray-400">
                  <h4 className="w-full text-base font-bold mb-4">{address.name}</h4>
                  <p className="w-full text-xl p-4 bg-gray-200 rounded">{address.address}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center cursor-pointer mt-4" onClick={this.logout}>
            <FontAwesomeIcon className="text-xl" icon={faSignOutAlt} />
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    app: state.app,
    ui: state.ui,
  }),
  (dispatch) => ({
    actions: bindActionCreators({ ...UserActions, ...AddressActions }, dispatch),
  })
)(DashboardPage);
