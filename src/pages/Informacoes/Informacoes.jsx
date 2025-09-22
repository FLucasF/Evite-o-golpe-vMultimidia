import React from 'react';
import profileImageAyla from '../../assets/Ayla.png';
import profileImageLucas from '../../assets/Lucas.png';
import profileImageDavid from '../../assets/David.png';
import styles from './Informacoes.module.css';

const Informacoes = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Lista de materiais para mais informações sobre golpes</h1>

            <div className={styles.wrapper}>

                <div className={styles.containerPrimario}>
                    <h2>Dicas gerais</h2>
                    <ul className={styles.listaDicas}>
                        <li>Não use senhas fáceis. Tente incorporar números, caracteres especiais e varie entre maiúsculas e minúsculas para aumentar a segurança da sua senha.</li>
                        <li>Se uma oferta parece boa demais para ser verdade, provavelmente não é legítima. Promoções com preços muito abaixo do mercado podem ser um indicativo de fraude.</li>
                        <li>Evite clicar em links ou abrir anexos de mensagens não solicitadas ou de remetentes desconhecidos, pois podem fazer com que programas maliciosos que podem danificar seu dispositivo ou compartilhar seus dados.</li>
                    </ul>
                </div>

                <div className={styles.containerSecundario}>
                    <h2>Sites</h2>
                    <ul className={styles.lista}>
                        <p>Mais informações sobre golpes na internet:</p>
                        <li><a href="https://eviteogolpe.netlify.app/" target="_blank" rel="noopener noreferrer">https://eviteogolpe.netlify.app/</a></li>
                        <p>Mais sobre o nosso projeto​:</p>
                        <li><a href="https://apps4society.dcx.ufpb.br" target="_blank" rel="noopener noreferrer">https://apps4society.dcx.ufpb.br</a></li>
                        <p>Segurança na rede e privacidade de dados: 8 dicas para se proteger e evitar golpes</p>
                        <li><a href="https://conectaja.proteste.org.br/8-dicas-para-se-proteger-e-evitar-golpes/" target="_blank" rel="noopener noreferrer">https://conectaja.proteste.org.br/8-dicas-para-se-proteger-e-evitar-golpes/</a></li>
                        <p>10 dicas para evitar fraudes nas compras online</p>
                        <li><a href="https://www.serasa.com.br/premium/blog/10-dicas-para-evitar-fraudes-nas-compras-online/" target="_blank" rel="noopener noreferrer">https://www.serasa.com.br/premium/blog/10-dicas-para-evitar-fraudes-nas-compras-online/</a></li>
                        <p>O Que é Phishing? Dicas para Evitar Golpes na Internet</p>
                        <li><a href="https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet" target="_blank" rel="noopener noreferrer">https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet</a></li>
                        <p>Como Identificar e Evitar Golpes Online: Um Guia Abrangente​ </p>
                        <li><a href="https://wi2be.com.br/internet/como-identificar-e-evitar-golpes-online-um-guia-abrangente/" target="_blank" rel="noopener noreferrer">https://wi2be.com.br/internet/como-identificar-e-evitar-golpes-online-um-guia-abrangente/</a></li>
                        <p>Conheça a verificação em duas etapas​ </p>
                        <li><a href="https://acesso.gov.br/faq/_perguntasdafaq/oqueautenticacao2fatores.html" target="_blank" rel="noopener noreferrer">https://acesso.gov.br/faq/_perguntasdafaq/oqueautenticacao2fatores.html</a></li>
                    </ul>
                </div>

                <div className={styles.containerTerciario}>
                    <h2>Vídeos</h2>
                    <ul className={styles.lista}>
                        <p>Golpe do amor nas redes sociais</p>
                        <li><a href="https://www.youtube.com/watch?v=81oQV0ryFkk" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=81oQV0ryFkk</a></li>
                        <p>Golpe do pix</p>
                        <li><a href="https://www.youtube.com/watch?v=JEP9pmN2GEM&pp=ygUedmlkZW9zIHNvYnJlIGdvbHBlIG5hIGludGVybmV0" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=JEP9pmN2GEM&pp=ygUedmlkZW9zIHNvYnJlIGdvbHBlIG5hIGludGVybmV0</a></li>
                        <p>Golpe de vendas</p>
                        <li><a href="https://www.youtube.com/watch?v=v1kY3gsVg9w" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=v1kY3gsVg9w</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Informacoes;
