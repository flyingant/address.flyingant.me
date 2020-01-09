/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

export default function BusySpinner(props) {
  let element = <div />;
  if (props.busy) {
    element = <div className="w-screen h-screen fixed inset-0 cursor-wait" />;
  }
  return element;
}

BusySpinner.propTypes = {
  busy: PropTypes.bool,
};
