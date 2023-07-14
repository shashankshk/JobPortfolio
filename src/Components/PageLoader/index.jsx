import React from 'react';
import PropTypes from 'prop-types';

const PageLoader = ({ children }) => {
  return <div className='page-loader'>{children}</div>;
};
PageLoader.propTypes = {
  children: PropTypes.element,
};
export default PageLoader;
