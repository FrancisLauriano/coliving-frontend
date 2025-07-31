// pages/CadastrarUsuarioPage/CadastrarUsuarioPage.jsx:
// pages/CadastrarUsuarioPage/CadastrarUsuarioPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UserForm from "../../components/Forms/UserForms";
import SuccessModal from "../../components/Modals/SuccessModal";
import { createPerson } from "../../services/personService";
import "./CadastrarUsuarioPage.css";

const CadastrarUsuarioPage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate(); // Criar uma instância do hook useNavigate

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Remover o campo confirmPassword antes de enviar
    delete data.confirmPassword;

    try {
      await createPerson(data);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    navigate("/"); // Redireciona para a HomePage
  };

  return (
    <div className="cadastrar-usuario-page">
      <Navbar />
      <main className="content">
        <UserForm
          onSubmit={handleFormSubmit}
          submitButtonLabel="Cadastrar"
        />
        {isSuccessModalOpen && (
          <SuccessModal
            message="Usuário cadastrado com sucesso!"
            onClose={handleModalClose} // Chama a função para fechar o modal e redirecionar
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CadastrarUsuarioPage;

