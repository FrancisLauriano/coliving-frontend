// routes/routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CadastrarUsuarioPage from '../pages/CadastrarUsuarioPage/CadastrarUsuarioPage';
import EditarUsuarioPage from '../pages/EditarUsuarioPage/EditarUsuarioPage';
import NotFound from '../pages/NotFound/NotFound';

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register-user" element={<CadastrarUsuarioPage />} />
      <Route path="/edit-user/:id" element={<EditarUsuarioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default RoutesComponent;




