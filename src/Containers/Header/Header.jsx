import React, { useContext } from 'react';
import logo from '../../Assets/images/Logo.png';
import Image from '../../Components/Image';
import HeaderMenu from './HeaderMenu';
import { ThemeContext } from '../../contexts/theme';
import ThemeButton from '../../Components/ThemeButton';
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
  return (
    <div className='header'>
      <Image src={logo} height={56} width={56} />
      <HeaderMenu />
      <ThemeButton onClick={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Header;
