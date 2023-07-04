import React, { useContext } from 'react';
import logo from '../../Assets/images/NewLogo.png';
import Image from '../../Components/Image';
import HeaderMenu from './HeaderMenu';
import { ThemeContext } from '../../contexts/theme';
// import './Header.scss';
import ThemeButton from '../../Components/ThemeButton';
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
      <ThemeButton onClick={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Header;
