import React from 'react';
import './Modal.css';
import useLocalStorage from 'use-local-storage';

const Modal = ({ isOpen, onClose }) => {
  // Move the hook call to the top level of the component
  const [isDark] = useLocalStorage("isDark", false);

  // Early return if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" data-theme={isDark ? "dark" : "light"}>
      <div className="modal-content">
        <h2>Feature in Development</h2>
        <p>This functionality is still in progress. Stay tuned for updates!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
