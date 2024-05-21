import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Links from "./assets/Components/Links";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
