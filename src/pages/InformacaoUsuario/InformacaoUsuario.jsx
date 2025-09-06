import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './InformacaoUsuario.module.css';

const InformacaoUsuario = () => {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_USER_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userID.trim()) {
      // 1. AÇÕES IMEDIATAS PARA O USUÁRIO
      sessionStorage.setItem('userID', userID);
      navigate('/Quiz'); 

      // 2. A REQUISIÇÃO É ENVIADA EM SEGUNDO PLANO (FIRE-AND-FORGET)
      // Removemos o 'await', então o código não espera aqui.
      axios.post(API_URL, { userID })
        .then(response => {
          // Opcional: Logar o sucesso no console quando a resposta chegar.
          console.log('User saved in background:', response.data);
        })
        .catch(error => {
          // Opcional: Logar o erro no console se a requisição falhar.
          console.error('Background error saving user:', error);
        });
    }
  };

  const handleAnonymousSubmit = () => {
    // 1. AÇÕES IMEDIATAS PARA O USUÁRIO
    sessionStorage.setItem('userID', 'Anonymous');
    navigate('/Quiz');

    // 2. A REQUISIÇÃO É ENVIADA EM SEGUNDO PLANO
    axios.post(API_URL, { userID: 'Anonymous' })
      .then(response => {
        console.log('Anonymous user saved in background:', response.data);
      })
      .catch(error => {
        console.error('Background error saving anonymous user:', error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Digite seu nome:</h2>
        <form id="userForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="userID"
            name="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </form>
        <div className={styles.buttonContainer}>
            <button type="submit" form="userForm">Enviar</button>
        </div>
        <p>ou</p>
        <button onClick={handleAnonymousSubmit} className={styles.noStyleLink}>Entrar sem meus dados</button>
      </div>
    </div>
  );
}

export default InformacaoUsuario;