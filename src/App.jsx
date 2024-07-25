import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Realisations from "./pages/Realisations/realisations";
import Team from "./pages/Team/team";
import Consecration from "./pages/Consecration/consecration";
import PageTransition from "./components/PageTransition/PageTransition";
import Alert from "./components/Alert/Alert";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <React.Fragment>
        <ScrollToTop />

        {/* <Alert message="Obtenir une soumission" /> */}
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/team" element={<Team />} />
          <Route path="/consecration" element={<Consecration />} />
        </Routes>
      </React.Fragment>
    </PageTransition>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
