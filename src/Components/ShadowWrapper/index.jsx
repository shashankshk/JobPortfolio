import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

const ShadowWrapper = ({ children, additionalClassNames }) => {
  const additionalClassNamesString = additionalClassNames.join(' ');
  return <div className={`shadow-wrapper ${additionalClassNamesString}`}>{children}</div>;
};

ShadowWrapper.propTypes = {
  children: PropTypes.elementType,
  additionalClassNames: PropTypes.string,
};

export default ShadowWrapper;
