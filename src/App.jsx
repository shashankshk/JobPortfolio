import React, { useEffect, useState } from 'react';
import './Assets/styles/main.scss';
import Header from './Containers/Header/Header';
import { ThemeContext } from './contexts/theme';
import './utils/icons';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <div className='app-container'>
            <Header />
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
