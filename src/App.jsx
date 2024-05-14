import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
