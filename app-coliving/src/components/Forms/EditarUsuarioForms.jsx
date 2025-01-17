// components/Forms/EditarUsuarioForms.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

const EditarUsuarioForms = ({ onSubmit }) => {
  const navigate = useNavigate(); // Hook para navegação

  const handleCancel = () => {
    navigate("/"); // Retorna para a HomePage
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit} className="form-container">
        <label>Nome</label>
        <input
          type="text"
          name="name"
          defaultValue={usuario.name}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          defaultValue={usuario.email}
          required
        />

        <label>Telefone</label>
        <input
          type="text"
          name="phone"
          defaultValue={usuario.phone}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          name="password"
          defaultValue={usuario.password}
          required
        />

        <label>Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          defaultValue={usuario.password}
          required
        />

        <label>Tipo</label>
        <select name="type" required>
          <option defaultValue={usuario.person_type}>
            Insira seu Tipo de usuário
          </option>
          <option value="operador">Operador</option>
          <option value="hospede">Hóspede</option>
          <option value="proprietario">Proprietário</option>
          <option value="fornecedor">Fornecedor</option>
        </select>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Salvar
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel} // Chama a função para redirecionar à HomePage
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarUsuarioForms;


