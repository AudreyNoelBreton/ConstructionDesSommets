import React, { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Modal = ({ message, onClose, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>{message}</p>
        <div className="modal__actions">
          <button className="btn" onClick={onConfirm}>
            <div className="btn__text">Confirmer</div>
            <FaArrowRightLong />
          </button>
          <button className="btn" onClick={onClose}>
            <div className="btn__text">Annuler</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
