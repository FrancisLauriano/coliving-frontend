// components/FilterBar/FilterBar.jsx:
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FilterBar.css';

function FilterBar({ onFilterChange }) {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/register-user');
  };

  return (
    <div className="filter-bar">
      <select className="filter-bar-select" onChange={onFilterChange}>
        <option value="">Selecione um filtro</option>
        <option value="operador">Operador</option>
        <option value="hóspede">Hóspede</option>
        <option value="proprietário">Proprietário</option>
        <option value="fornecedor">Fornecedor</option>
      </select>
      <button className="filter-bar-add-button" onClick={handleAddUser}>
        Adicionar
      </button>
    </div>
  );
}

export default FilterBar;



