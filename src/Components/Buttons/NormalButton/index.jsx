import React from 'react';
import PropTypes from 'prop-types';
const NormalButton = ({ value, onClick, type, className, children }) => {
  return (
    <button onClick={onClick} className={`normal-button normal-button-${type} ${className}`}>
      {value}
      {children ? '  ' : ''}
      {children}
    </button>
  );
};

NormalButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'warning']),
  className: PropTypes.string,
  children: PropTypes.element,
};

export default NormalButton;
