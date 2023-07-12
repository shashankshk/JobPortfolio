import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
// import './ThemeButton.scss';
const ThemeButton = ({ onClick, theme }) => {
  return (
    // <button type='button' className={`toggle-btn__input-label`} onClick={onClick}>
    <div className='theme-icon' onClick={onClick}>
      {theme == 'dark' ? (
        <Icon
          type={faSun}
          style={{ color: '#ffd43c', display: 'flex', alignItems: 'center' }}
          size='xl'
        />
      ) : (
        <Icon
          type={faMoon}
          style={{ color: 'black', display: 'flex', alignItems: 'center' }}
          size='xl'
        />
      )}
    </div>
  );
};
ThemeButton.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

export default ThemeButton;
