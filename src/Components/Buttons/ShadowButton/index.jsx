import React from 'react';
import PropTypes from 'prop-types';
import ShadowWrapper from '../../ShadowWrapper';
const ShadowButton = ({ value, onClick, type, className }) => {
  return (
    <ShadowWrapper additionalClassNames={['shadow-button-wrapper', className]}>
      <button onClick={onClick} className={`shadow-button-${type}`}>
        {value}
      </button>
    </ShadowWrapper>
  );
};

ShadowButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'warning']),
  className: PropTypes.string,
};

export default ShadowButton;
