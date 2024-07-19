import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Realisations from "./pages/Realisations/realisations";
import Team from "./pages/Team/team";

import Consecration from "./pages/Consecration/consecration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>{" "}
        <Route path="/realisations" element={<Realisations />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/consecration" element={<Consecration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
