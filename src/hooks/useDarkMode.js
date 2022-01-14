import React, { useState, } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
      };
      <div className={darkMode ? "dark-mode App" : "App"}>
      <div className="dark-mode__toggle">
       
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        </div>
      </div>
     return(darkMode, toggleMode)
}
