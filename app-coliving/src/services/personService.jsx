// /services/personService.jsx
import api from './apiService';

// Função para criar uma nova pessoa (POST /persons)
export const createPerson = async (personData) => {
  try {
    console.log('Enviando dados para o backend:', personData);
    const response = await api.post('/persons', personData);
    console.log('Resposta do backend:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error.response?.data || error.message);
    throw error;
  }
};

// Função para obter todas as pessoas (GET /persons)
export const getAllPersons = async () => {
  try {
    const response = await api.get('/persons');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todas as pessoas:', error.response?.data || error.message);
    throw error;
  }
};

// Função para obter uma pessoa por ID (GET /persons/<id>)
export const getPersonById = async (id) => {
  try {
    const response = await api.get(`/persons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar pessoa com ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// Função para atualizar uma pessoa por ID (PUT /persons/<id>)
export const updatePerson = async (id, updatedData) => {
  try {
    console.log('Enviando dados para o backend:', updatedData);
    const response = await api.put(`/persons/${id}`, updatedData);
    console.log('Resposta do backend:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar pessoa com ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};

// Função para deletar uma pessoa por ID (DELETE /persons/<id>)
export const deletePerson = async (id) => {
  try {
    const response = await api.delete(`/persons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar pessoa com ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};
