// components/Navbar/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import './Navbar.css';
import searchIcon from '../../assets/search-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';

function Navbar() {
  const navigate = useNavigate(); // Instancia o hook de navegação

  const handleTitleClick = () => {
    navigate('/'); // Redireciona para a rota HomePage
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="search-container">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" className="search-bar" placeholder="Buscar" />
        </div>
        {/* Adiciona um evento onClick ao título */}
        <h1 className="navbar-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          Colliving
        </h1>
        <div className="navbar-profile">
          <img src={ProfileIcon} alt="Profile Icon" className="profile-icon" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

