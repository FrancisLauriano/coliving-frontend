// pages/EditarUsuarioPage/EditarUsuarioPage.jsx:
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SuccessModal from "../../components/Modals/SuccessModal";
import { getPersonById, updatePerson } from "../../services/personService";
import "../CadastrarUsuarioPage/CadastrarUsuarioPage.css";

const EditarUsuarioPage = () => {
  const { id } = useParams(); // Recupera o ID da URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Armazena os dados do usuário
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getPersonById(id);
        setUser(data); // Preenche os dados do usuário
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedData = Object.fromEntries(formData.entries());

    // Criar um objeto contendo apenas os campos alterados
    const fieldsToUpdate = {};
    for (const key in updatedData) {
      if (updatedData[key] && updatedData[key] !== user[key]) {
        fieldsToUpdate[key] = updatedData[key];
      }
    }

    // Remover confirmPassword do objeto caso a senha tenha sido alterada
    if (fieldsToUpdate.password) {
      delete fieldsToUpdate.confirmPassword;
    }

    try {
      if (Object.keys(fieldsToUpdate).length > 0) {
        await updatePerson(id, fieldsToUpdate);
        setIsSuccessModalOpen(true); // Exibe o modal de sucesso
      } else {
        alert("Nenhuma alteração foi realizada.");
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const handleCancel = () => {
    navigate("/"); // Retorna para a HomePage
  };

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="editar-usuario-page">
      <Navbar />
      <main className="content">
        <form onSubmit={handleFormSubmit} className="form-container">
          <label>Nome</label>
          <input type="text" name="name" defaultValue={user.name} required />

          <label>Email</label>
          <input type="email" name="email" defaultValue={user.email} required />

          <label>Telefone</label>
          <input type="text" name="phone" defaultValue={user.phone} required />

          <label>Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digite uma nova senha, se desejar"
          />

          <label>Confirmar Senha</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a nova senha"
          />

          <label>Tipo</label>
          <select name="person_type" defaultValue={user.person_type} required>
            <option value="operador">Operador</option>
            <option value="hospede">Hóspede</option>
            <option value="proprietario">Proprietário</option>
            <option value="fornecedor">Fornecedor</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Salvar
            </button>
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
        {isSuccessModalOpen && (
          <SuccessModal
            message="Usuário atualizado com sucesso!"
            onClose={() => {
              setIsSuccessModalOpen(false);
              navigate("/"); // Redireciona para a HomePage
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EditarUsuarioPage;

