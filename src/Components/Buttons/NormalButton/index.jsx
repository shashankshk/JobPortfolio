import React from 'react';
import PropTypes from 'prop-types';
const NormalButton = ({ value, onClick, type, className }) => {
  return (
    <button onClick={onClick} className={`normal-button normal-button-${type} ${className}`}>
      {value}
    </button>
  );
};

NormalButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'warning']),
  className: PropTypes.string,
};

export default NormalButton;
