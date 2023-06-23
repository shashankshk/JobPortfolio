import React, { useState } from "react";
import "./Assets/styles/main.scss";
import Header from "./Containers/Header/Header";
import { ThemeContext } from "./contexts/theme";
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <Header />
          Welcome to React App thats build using Webpack and Babel separately
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
