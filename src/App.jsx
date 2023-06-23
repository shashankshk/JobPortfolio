import React, { useState } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import {  } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-regular-svg-icons';
import './Assets/styles/main.scss';
import Header from './Containers/Header/Header';
import { ThemeContext } from './contexts/theme';
import './utils/icons';
// import Home from './Containers/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <div className='app-container'>
            <Header />
            <Outlet />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
