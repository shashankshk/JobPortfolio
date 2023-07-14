import React, { useEffect, useState } from 'react';
import './Assets/styles/main.scss';
import Header from './Containers/Header/Header';
import { ThemeContext } from './contexts/theme';
import './utils/icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Outlet, useLocation } from 'react-router-dom';

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
            <TransitionGroup component={null}>
              <CSSTransition key={location.key} classNames='fade' timeout={500}>
                <Outlet />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
