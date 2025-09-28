import React from 'react';
import profileImageAyla from '../../assets/Ayla.png';
import profileImageLucas from '../../assets/Lucas.png';
import profileImageDavid from '../../assets/David.png';
import profileImageNathalia from '../../assets/Nathalia.png';
import profileImageJose from '../../assets/Yago.png';
import styles from './Sobre.module.css';

const Sobre = () => {
    return (
        <div className={styles.container}>
            <h2>Sobre nós:</h2>
            <div className={styles.profileContainerWrapper}>
                <div className={styles.profileContainer}>
                    
                    <div className={styles.profileRow}>
                        <div className={styles.profileContent}>
                            <img className={styles.profileImage} src={profileImageAyla} alt="Profile da pessoa" />
                            <div className={styles.profileText}>
                                <h1>Ayla Rebouças</h1>
                                <p>Professora pesquisadora do DCX/CCAE nas áreas de Educação em Computação, Informática na Educação, Engenharia de Software, Sistemas Distribuídos e Sistemas Adaptativos.</p>
                                <a href="https://www.linkedin.com/in/ayla-dantas-1256802/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                        </div>

                        <div className={styles.profileContent}>
                            <img className={styles.profileImage} src={profileImageNathalia} alt="Profile da pessoa" />
                            <div className={styles.profileText}>
                                <h1>Maria Nathália</h1>
                                <p>Graduanda em Licenciatua em Ciência da Computação no campus IV da UFPB, em Rio Tinto-PB. Áreas de Interesse: Tecnologias Educacionais, Pensamento Computacional, HTML, CSS, Testes</p>
                                <a href="https://www.linkedin.com/in/nathalia-nascimento-a3104b24a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                        </div>
                        <div className={styles.profileContent}>
                            <img className={styles.profileImage} src={profileImageJose} alt="Profile da pessoa" />
                            <div className={styles.profileText}>
                                <h1>José Yago</h1>
                                <p>Graduando em Licenciatua em Ciência da Computação no campus IV da UFPB, em Rio Tinto-PB. Áreas de Interesse: Tecnologias Educacionais, Pensamento Computacional, HTML, CSS, Testes</p>
                                <a href="https://www.linkedin.com/in/jos%C3%A9-oliveira-8427ba26a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.profileRow}>
                        <div className={styles.profileContent}>
                            <img className={styles.profileImage} src={profileImageLucas} alt="Profile da pessoa" />
                            <div className={styles.profileText}>
                                <h1>Lucas Felipe</h1>
                                <p>Graduando em Ciência da Computação no campus IV da UFPB, em Rio Tinto-PB. Áreas de Interesse: Desenvolvimento FullStack, Java, Python, PHP, Testes</p>
                                <a href="https://encurtador.com.br/8S5jb" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                        </div>

                        <div className={styles.profileContent}>
                            <img className={styles.profileImage} src={profileImageDavid} alt="Profile da pessoa" />
                            <div className={styles.profileText}>
                                <h1>David Goncalves</h1>
                                <p>Graduando em Sistemas de Informação no campus IV da UFPB, em Rio Tinto-PB. Áreas de Interesse: Desenvolvimento Back End, HTML5, CSS3, Testes, API’s</p>
                                <a href="https://www.linkedin.com/in/david-gon%C3%A7alves-maia-a51218212/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
