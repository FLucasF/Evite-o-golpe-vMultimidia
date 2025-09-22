import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import quizQuestions from '../../data/questions.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import styles from './Quiz.module.css';

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userID } = location.state || { userID: sessionStorage.getItem('userID') || 'DefaultUserID' };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const shuffleAndReduceQuestions = (questionsArray) => {
    let shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    const shuffledQuestions = shuffleAndReduceQuestions(quizQuestions);
    setQuestions(shuffledQuestions);
  }, []);

  const saveResponseQuestion = async (response) => {
    try {
      const result = await axios.post(import.meta.env.VITE_API_RESPONSE_URL, response);
      return result.data;
    } catch (error) {
      console.error('Error saving response:', error);
      alert('Houve um erro ao se conectar, você está usando o sistema offline!');
      return null;
    }
  };

  const handleAnswerClick = async (answer, index) => {
    setIsButtonDisabled(true);
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = currentQuestion.answers[index]; // pega objeto {text, isCorrect, justification}
    const isCorrect = currentAnswer.isCorrect;

    setSelectedAnswerIndex(index);
    setIsAnswerCorrect(isCorrect);

    const response = {
      userID: userID,
      idApp: "WEB-EVITE-O-GOLPE 1.0",
      phase: "1",
      activity: currentQuestion.questionID,
      userResponse: currentAnswer.text,
      expectedResponse: currentQuestion.answers.find(a => a.isCorrect).text,
      question: currentQuestion.question,
      isCorrect: isCorrect,
      dateResponse: new Date().toISOString(),
      typeOfQuestion: "MULTIPLA ESCOLHA"
    };

    await saveResponseQuestion(response);

    if (isCorrect) {
      setCorrectCount(prev => {
        const updatedCount = prev + 1;
        console.log("Acertou:", updatedCount);

        setTimeout(() => {
          if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            navigate('/FinalDoQuiz', { state: { errorCount, correctCount: updatedCount } });
          }
          setSelectedAnswerIndex(null);
          setIsAnswerCorrect(null);
          setIsButtonDisabled(false);
        }, 2000);

        return updatedCount;
      });
      toast.success("Resposta correta!", { autoClose: 2000 });
    } else {
      setErrorCount(prev => {
        console.log("Errou:", prev + 1);
        setTimeout(() => {
          setSelectedAnswerIndex(null);
          setIsAnswerCorrect(null);
          setIsButtonDisabled(false);
        }, 2000);
        return prev + 1;
      });
      toast.error(
        `Não é bem isso. ${currentAnswer.justification}`,
        { autoClose: 3000 }
      );
    }
  };

  const getButtonClass = (idx, selectedAnswerIndex, isAnswerCorrect) => {
    if (selectedAnswerIndex !== null && selectedAnswerIndex === idx) {
      return isAnswerCorrect ? styles.correct : styles.incorrect;
    }
    return '';
  };

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.content}>
        {questions.length > 0 && (
          <>
            <img
              className={styles.imagemQuiz}
              src={questions[currentQuestionIndex].imageName}
              alt="Imagem referente a questão"
            />
            <div className={styles.buttonContainer}>
              <h3 className={styles.title}>{questions[currentQuestionIndex].question}</h3>
              {questions[currentQuestionIndex].answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`${styles.customButton} ${getButtonClass(idx, selectedAnswerIndex, isAnswerCorrect)}`}
                  onClick={() => handleAnswerClick(answer, idx)}
                  disabled={isButtonDisabled}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
