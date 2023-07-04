import React from 'react';
import PropTypes from 'prop-types';
// import './Label.scss';

const Label = ({ value, type, className }) => {
  return <label className={`label-${type} ${className}`}>{value}</label>;
};

Label.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
