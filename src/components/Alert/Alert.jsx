import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Alert.scss";

const Alert = ({ message, isActive }) => {
  const [showAlert, setShowAlert] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/about") {
      setShowAlert(false); // Masquer l'alerte sur la page About
    } else {
      setShowAlert(true); // Afficher l'alerte sur les autres pages
    }
  }, [location]);

  const handleClose = () => {
    setShowAlert(false);
    localStorage.setItem("alertDismissed", "true");
    navigate("/about"); // Redirection vers la page About
  };

  return (
    <div
      className={`alert ${isActive && showAlert ? "active" : ""}`}
      onClick={handleClose}
    >
      <div className="alert__text">{message}</div>
      <FaArrowRightLong />
    </div>
  );
};

export default Alert;
