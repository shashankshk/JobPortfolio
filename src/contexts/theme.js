/* eslint-disable no-unused-vars */
import { createContext } from 'react';
export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme) => {},
});