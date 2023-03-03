import React from "react";
import "./App.css";

import { BackToTopButton, Navbar } from "./components";
import { Header, About, TechStack, Projects, Contact } from "./containers";

const App = () => {
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
