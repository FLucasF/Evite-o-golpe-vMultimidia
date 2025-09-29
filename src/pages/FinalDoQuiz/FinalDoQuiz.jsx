import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './FinalDoQuiz.module.css';
import ImageFinalQuiz from '../../assets/ImagemFinalQuiz.png';

function FinalDoQuiz() {
    const navigate = useNavigate();
    const location = useLocation();
    const errors = location.state?.errorCount || 0;
    const correctAnswers = location.state?.correctCount || 0;
    const totalAttempts = correctAnswers + errors;
    const performance = totalAttempts > 0 ? (correctAnswers / totalAttempts) * 100 : 0;

    const handleNavigateHome = () => {
        navigate('/');
    };
    
    const handleRestartQuiz = () => {
        navigate('/InformacaoUsuario');
    };

    const openFeedbackForm = () => {
        window.open('https://bit.ly/form_evite_o_golpe', '_blank');
    };

    return (
        <div className={styles.finalPageContainer}>
            <h1>Parabéns por finalizar o quiz!</h1>
            <img className={styles.imagem} src={ImageFinalQuiz} alt="Mascote comemorando o fim do quiz" />
            <div className={styles.statsContainer}>
                <h2>Tentativas totais: {totalAttempts}</h2>
                <h2>Acertos: {correctAnswers}</h2>
                <h2>Tentativas erradas: {errors}</h2>
                <h2>Desempenho geral: {performance.toFixed(2)}%</h2>
            </div>
            
            <button type="button" onClick={openFeedbackForm} className={styles.btnFeedBack}>FeedBack</button>

            <button type="button" onClick={handleNavigateHome} className={styles.btnVoltar}>
                <i className="bi bi-chevron-left"></i>
            </button>
            
            <button type="button" onClick={handleRestartQuiz} className={styles.btnReinciar}>
                <i className="bi bi-arrow-repeat"></i>
            </button>
        </div>
    );
}

export default FinalDoQuiz;