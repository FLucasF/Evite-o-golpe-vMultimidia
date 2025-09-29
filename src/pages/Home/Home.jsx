import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import imagemTelaInicial from '../../assets/ImageHome.png'

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToQuiz = () => {
    navigate('/InformacaoUsuario');
  };

  const handleNavigateToTutorial = () => {
    navigate('/Tutorial')
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <img className={styles.imageContainer} src={imagemTelaInicial} alt="Imagem da tela inicial" />
        <h1 className={styles.title}>Evite o Golpe</h1>
        <p className={styles.subtitle}>Aprenda a identificar e se proteger de golpes online de forma rápida e divertida.</p>
      </div>
      <button type="button" onClick={handleNavigateToQuiz} className={styles.btn}>Iniciar</button>
      <button type="button" onClick={handleNavigateToTutorial} className={styles.btn}>Tutorial</button>
      <footer className={styles.footer}>
        <p>Copyright © 2024 <span className={styles.companyName}>Apps4Society</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;