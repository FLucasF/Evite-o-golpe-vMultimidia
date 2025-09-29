import React, { useState } from 'react';
import styles from './Tutorial.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import imageTabletAcena from '../../../public/img/tablet_acena.png';
import imageTabletPensa from '../../../public/img/tablet_pensa.png';
import imageTabletExplica from '../../../public/img/tablet_explica.png';
import imageTabletComemora from '../../../public/img/tablet_comemora.png';
import imageTabletEstuda from '../../../public/img/tablet_estuda.png';
import imageTabletAnota from '../../../public/img/tablet_anota.png';

import imagePrintHome from '../../assets/printHome.png';
import imagePrintQuiz from '../../assets/printQuiz.png';
import imagePrintCertoErrado from '../../assets/printQuizCertoErrado.png';
import imagePrintFinalQuiz from '../../assets/printFinalQuiz.png';
import imagePrintMaisInfo from '../../assets/printMaisInfo.png';
import imagePrintFeedback from '../../assets/printFeedback.png';

const slidesData = [
  {
    tabletImage: imageTabletAcena, 
    tabletPhrase: 'Olá! Sou seu guia no \'Evite o Golpe\'. Vou te mostrar como se proteger online. Vamos começar?',
    title: 'Passo 1: O Ponto de Partida',
    description: 'Tudo começa na tela inicial. Aqui, você pode ir direto para o nosso quiz de segurança ou navegar pelo menu para explorar outras áreas.',
    actionHint: 'Clique em "Iniciar" para testar seus conhecimentos!',
    imagePlaceholder: imagePrintHome
  },
  {
    tabletImage: imageTabletPensa, 
    tabletPhrase: 'É hora de se testar! Cada pergunta é uma chance de aprender a identificar um golpe.',
    title: 'Passo 2: O Desafio do Quiz',
    description: 'Você encontrará uma série de perguntas sobre situações comuns do dia a dia. Leia com atenção e escolha a alternativa que parece mais segura.',
    actionHint: 'Escolha a alternativa que você acredita ser a correta.',
    imagePlaceholder: imagePrintQuiz
  },
  {
    tabletImage: imageTabletExplica, 
    tabletPhrase: 'Não se preocupe em errar! O mais importante é entender o porquê de cada resposta.',
    title: 'Passo 3: Aprenda na Hora',
    description: 'Após cada resposta, você receberá um feedback instantâneo. Verde se acertou, e vermelho se errou, sempre com uma explicação clara para você não cair em armadilhas no futuro.',
    actionHint: 'Leia o feedback para fixar o aprendizado!',
    imagePlaceholder: imagePrintCertoErrado
  },
  {
    tabletImage: imageTabletComemora, 
    tabletPhrase: 'Veja como você se saiu! Todo conhecimento adquirido é uma vitória contra os golpes.',
    title: 'Passo 4: Seu Resultado Final',
    description: 'Ao final do quiz, você verá sua pontuação completa, incluindo o número de acertos e erros. Use isso para avaliar quais áreas você já domina!',
    actionHint: 'Confira seu desempenho e sinta-se mais seguro!',
    imagePlaceholder: imagePrintFinalQuiz
  },
  {
    tabletImage: imageTabletEstuda, 
    tabletPhrase: 'O aprendizado não termina no quiz. Temos uma biblioteca de conhecimento para você!',
    title: 'Passo 5: Aprofunde seus Conhecimentos',
    description: 'Na seção "Mais Informações", você encontra dicas de segurança, artigos e links para sites confiáveis. É um ótimo lugar para continuar aprendendo.',
    actionHint: 'Explore a seção "Mais Informações" no menu superior.',
    imagePlaceholder: imagePrintMaisInfo
  },
  {
    tabletImage: imageTabletAnota,
    tabletPhrase: 'Sua opinião é super importante para mim! Me ajude a deixar o \'Evite o Golpe\' ainda melhor.',
    title: 'Passo 6: Contribua com seu Feedback',
    description: 'Gostou do site? Tem alguma sugestão? Clique na opção "Feedback" no menu a qualquer momento para nos enviar sua mensagem. Nós lemos tudo!',
    actionHint: 'Sempre que tiver uma ideia, use o botão "Feedback"!',
    imagePlaceholder: imagePrintFeedback
  }
];

const Tutorial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? prev : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const currentSlideData = slidesData[currentSlide];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.tabletGuide}>
        <img src={currentSlideData.tabletImage} alt="Tablet personagem falando" className={styles.tabletImage} />
        <div className={styles.speechBubble}>
          {currentSlideData.tabletPhrase}
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navArrow} ${styles.leftArrow}`}
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carouselViewport}>
          <div
            className={styles.slidesTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div className={styles.slide} key={index}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
                <div className={styles.actionPrompt}>
                  <span>{slide.actionHint}</span>
                </div>
                <img 
                  src={slide.imagePlaceholder} 
                  alt={slide.title}
                  className={styles.imagePlaceholder} 
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navArrow} ${styles.rightArrow}`}
          onClick={handleNext}
          disabled={currentSlide === slidesData.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;