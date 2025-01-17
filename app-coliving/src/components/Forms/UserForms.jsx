// components/Forms/CadastrarUsuarioForms.jsx
// components/Forms/UserForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

const UserForm = ({ onSubmit, defaultValues, submitButtonLabel }) => {
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
          placeholder="Insira seu nome"
          defaultValue={defaultValues?.name || ""}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu Email"
          defaultValue={defaultValues?.email || ""}
          required
        />

        <label>Telefone</label>
        <input
          type="text"
          name="phone"
          placeholder="Insira seu telefone"
          defaultValue={defaultValues?.phone || ""}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          name="password"
          placeholder="Insira sua senha"
          required
        />

        <label>Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          required
        />

        <label>Tipo</label>
        <select name="person_type" defaultValue={defaultValues?.person_type || ""} required>
          <option value="" disabled hidden>
            Insira seu Tipo de usuário
          </option>
          <option value="operador">Operador</option>
          <option value="hospede">Hóspede</option>
          <option value="proprietario">Proprietário</option>
          <option value="fornecedor">Fornecedor</option>
        </select>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {submitButtonLabel}
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
