import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ type, style, flip, size }) => {
  return <FontAwesomeIcon icon={type} style={style} flip={flip} size={size} />;
};

Icon.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  flip: PropTypes.string | undefined,
  size: PropTypes.string,
};

export default Icon;
