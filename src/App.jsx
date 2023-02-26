import React, { useLayoutEffect } from "react";
import "./App.css";

import "./assets/themes/darkTheme.css";
import "./assets/themes/lightTheme.css";

import { BackToTopButton, Navbar } from "./components";
import { Header, About, TechStack, Projects, Contact } from "./containers";

const App = () => {
  useLayoutEffect(() => {
    document.querySelector("body")?.classList?.add("default-theme");
  }, []);

  return (
    <>
      <BackToTopButton />
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
