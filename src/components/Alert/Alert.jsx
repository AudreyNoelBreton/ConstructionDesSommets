import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Alert.scss";
import { useLocation } from "react-router-dom";

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const alertDismissed = localStorage.getItem("alertDismissed");
    if (alertDismissed) {
      setShowAlert(false);
    }
  }, [location]);

  const handleClose = () => {
    setShowAlert(false);
    localStorage.setItem("alertDismissed", "true");
  };

  return (
    <Link
      to={"/about"}
      className={`alert ${!showAlert ? "alert--hide" : ""}`}
      onClick={handleClose}
    >
      {message}
    </Link>
  );
};

export default Alert;
