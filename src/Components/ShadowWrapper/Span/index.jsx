import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ShadowWrapperSpan = ({ children }) => {
  return <span className='shadow-wrapper-span'>{children}</span>;
};

ShadowWrapperSpan.propTypes = {
  children: PropTypes.elementType,
};

export default ShadowWrapperSpan;
