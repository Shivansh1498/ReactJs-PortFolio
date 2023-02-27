import React, { useState, useLayoutEffect } from "react";
import "./SwitchThemeButton.css";

import { lightModeIcon, darkModeIcon } from "./images";

const SwitchThemeButton = () => {
  const [theme, setTheme] = useState();

  /**
   * Function for Changing theme to light mode
   *
   * @memberof SwitchThemeButton
   */
  const handleLightThemeChange = () => {
    localStorage.setItem("theme", "default-theme");
    setTheme(false);
    document.querySelector("body")?.classList?.add("default-theme");
    document.querySelector("body")?.classList?.remove("dark-theme");
  };

  /**
   * Function for Changing theme to Dark mode
   *
   * @memberof SwitchThemeButton
   */
  const handleDarkThemeChange = () => {
    localStorage.setItem("theme", "dark-theme");
    setTheme(true);
    document.querySelector("body")?.classList?.add("dark-theme");
    document.querySelector("body")?.classList?.remove("default-theme");
  };

  useLayoutEffect(() => {
    let getTheme = localStorage.getItem("theme");
    if (getTheme == "default-theme") {
      handleLightThemeChange();
    } else {
      handleDarkThemeChange();
    }
  }, [theme]);

  return (
    <>
      <div className="portfolio__switchTheme">
        {theme ? (
          <img
            src={lightModeIcon}
            alt="Light Mode Icon"
            className="sun"
            onClick={handleLightThemeChange}
          />
        ) : (
          <img
            src={darkModeIcon}
            alt="Dark Mode Icon"
            className="moon"
            onClick={handleDarkThemeChange}
          />
        )}
      </div>
    </>
  );
};

export default SwitchThemeButton;
