import React, { useContext } from 'react';
import logo from '../../Assets/images/NewLogo.png';
import Image from '../../Components/Image';
import HeaderMenu from './HeaderMenu';
import { ThemeContext } from '../../contexts/theme';
import './Header.scss';
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
  return (
    <div className='header'>
      <Image src={logo} height={48} width={48} />
      <HeaderMenu />
      <button type='button' className={`toggle-btn__input-label`} onClick={handleThemeChange}>
        Dark theme
      </button>
    </div>
  );
};

export default Header;
