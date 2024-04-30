import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
  placa: 'username',
  montadora: 'password',
  });

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNovoUsuario((prevUsuario) => ({
    ...prevUsuario,
    [name]: value,
  }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/cadastro', novoUsuario);
      setNovoUsuario({
        placa: '',
        montadora: '',
      });
    } catch (error) {
      console.error('Erro ao criar usuario:', error);
    }
  };
  
  const irPara= useNavigate();
  const handleClick = (path) => {
    irPara('/');
  };
  return (
    <div>
      <h1>Página de Cadastro</h1>     
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={novoUsuario.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={novoUsuario.password}
        onChange={handleInputChange}
      />
      <button type="submit">Adicionar Usuario</button>
    </form>
 
      <button onClick={handleClick}>Voltar</button>
    </div>
  );
}
export default Cadastro;
