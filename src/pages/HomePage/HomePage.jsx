// pages/HomePage/HomePage.jsx:
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import UserCard from '../../components/Cards/UserCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import DeleteModal from '../../components/Modals/DeleteModal';
import SuccessModal from '../../components/Modals/SuccessModal';
import './HomePage.css';
import { getAllPersons, deletePerson } from '../../services/personService';

const HomePage = () => {
  const navigate = useNavigate(); // Hook para navegação
  const handleEditClick = (userId) => {
    navigate(`/edit-user/${userId}`); // Redireciona para a página de edição com o ID do usuário
  };
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllPersons();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;

    if (!selectedFilter) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        (user) => user.person_type.toLowerCase() === selectedFilter.toLowerCase()
      );
      setFilteredUsers(filtered);
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleRemoveUser = async () => {
    try {
      await deletePerson(selectedUser.id);
      setUsers(users.filter((user) => user.id !== selectedUser.id));
      setFilteredUsers(filteredUsers.filter((user) => user.id !== selectedUser.id));
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  };

  return (
    <div className="home-page">
      <Navbar />
      <main className="content">
        <div className="container">
          <FilterBar onFilterChange={handleFilterChange} />
          <div className="user-list">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                role={user.person_type}
                date={user.registration_date}
                onEdit={() => handleEditClick(user.id)} // Passa o ID do usuário
                onDelete={() => handleDeleteClick(user)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {isDeleteModalOpen && (
        <DeleteModal
          userName={selectedUser?.name}
          onCancel={() => setIsDeleteModalOpen(false)}
          onRemove={handleRemoveUser}
        />
      )}
      {isSuccessModalOpen && (
        <SuccessModal
          message={`Usuário ${selectedUser?.name} removido com sucesso!`}
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;

