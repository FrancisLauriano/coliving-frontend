// components/Modals/DeleteModal.jsx
import React from 'react';
import './DeleteModal.css';
import TrashIcon from '../../assets/trash-rose-icon.svg'; // Ícone de lixeira
import Button from '../Buttons/Button'; // Reutilizando o componente de botões

function DeleteModal({ userName, onCancel, onRemove }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container delete-modal">
        {/* Ícone de Lixeira */}
        <div className="modal-icon">
          <img src={TrashIcon} alt="Lixeira" />
        </div>
        {/* Mensagem principal */}
        <p className="modal-title">Tem certeza que deseja remover usuário:</p>
        {/* Nome do usuário */}
        <p className="modal-username">{userName}</p>
        {/* Botões de ação */}
        <div className="modal-actions">
          <Button text="Cancelar" type="cancelar2" onClick={onCancel} />
          <Button text="Remover" type="remover" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
