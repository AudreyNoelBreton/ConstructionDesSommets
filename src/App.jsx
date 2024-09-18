import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Realisations from "./pages/Realisations/realisations";
import Team from "./pages/Team/team";
import Consecration from "./pages/Consecration/consecration";
import Falaise from "./pages/Falaise/falaise";
import PageTransition from "./components/PageTransition/PageTransition";
import ScrollToTop from "./components/scrollToTop";
import Maison from "./pages/Maison/maison";
import Olympique from "./pages/Olympique/olympique";

const App = () => {
  const location = useLocation();
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/about") {
      setIsAlertActive(false);
      setTimeout(() => {
        setIsAlertActive(true);
      }, 0);
    }
  }, [location]);

  return (
    <PageTransition>
      <React.Fragment>
        <ScrollToTop />

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisations" element={<Realisations />}>
            <Route path="consecration" element={<Consecration />} />
            <Route path="ferreolaise" element={<Falaise />} />
            <Route path="maison-verte" element={<Maison />} />
            <Route path="olympique" element={<Olympique />} />
          </Route>
          <Route path="/team" element={<Team />} />
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
