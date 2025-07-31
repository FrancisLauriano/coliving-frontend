// components/Modals/SuccessModal.jsx
import React from 'react';
import Button from '../Buttons/Button';
import './SuccessModal.css';
import ModalIcon from '../../assets/modal-icon.svg'; // Ícone do modal

function SuccessModal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-icon">
          <img src={ModalIcon} alt="Ícone de sucesso" />
        </div>
        <p className="modal-message">{message}</p>
        <Button text="OK" type="ok" onClick={onClose} />
      </div>
    </div>
  );
}

export default SuccessModal;
