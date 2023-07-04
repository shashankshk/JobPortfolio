import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, type, className }) => {
  return <div className={`card-wrapper-${type} ${className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.elementType,
  type: PropTypes.oneOf(['info', 'highlight', 'plain']),
  className: PropTypes.string,
};

export default Card;
