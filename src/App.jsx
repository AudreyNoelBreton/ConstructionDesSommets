import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Realisations from "./pages/Realisations/realisations";
import Team from "./pages/Team/team";
import Project from "./pages/Project/project";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>{" "}
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
