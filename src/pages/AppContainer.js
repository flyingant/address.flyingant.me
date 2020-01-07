/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UIActions from '../actions/UIActions';
import AppActions from '../actions/AppActions';

import BusySpinner from '../components/BusySpinner';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.testLoading = this.testLoading.bind(this);
    this.thisAJAXRequesting = this.thisAJAXRequesting.bind(this);
  }

  testLoading() {
    const { actions } = this.props;
    actions.busy();
    setTimeout(() => {
      actions.busyCompleted();
    }, 2000);
  }

  thisAJAXRequesting() {
    const { actions } = this.props;
    actions.initialize();
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="container max-auto flex flex-col">
        <h1 className="text-center">React App</h1>
        <div className="flex flex-row align-center justify-center mt-8">
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => this.testLoading()}>
            Busy Testing
          </div>
          <div className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => this.thisAJAXRequesting()}>
            Ajax Request Testing
          </div>
        </div>
        <BusySpinner busy={loading} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.root.getIn(['ui', 'loading']),
  }),
  (dispatch) => ({
    actions: bindActionCreators({ ...UIActions, ...AppActions }, dispatch),
  })
)(AppContainer);
