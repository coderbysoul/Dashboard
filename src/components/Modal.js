import React, { useState } from "react";
import "./Modal.css"; // You can create a separate CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>
              <i class="fa-solid fa-xmark"></i>
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
