import React, { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "../assets/themes/lightTheme.css";
import "../assets/themes/darkTheme.css";

import App from "../App";
import { PageNotFound, WeatherReport } from "../pages";

const CustomRoutes = () => {
  // Default Theme
  useLayoutEffect(() => {
    document.querySelector("body")?.classList?.add("default-theme");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/projects/weatherreport" element={<WeatherReport />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
