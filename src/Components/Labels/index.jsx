import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ value, type, className, italic }) => {
  const classes = [
    'label',
    type && `label-${type}`,
    className && className,
    italic && 'label-italic',
  ]
    .filter(Boolean)
    .join(' ');
  return <span className={classes}>{value}</span>;
};

Label.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  value: PropTypes.string,
  className: PropTypes.string,
  italic: PropTypes.bool,
};

export default Label;
