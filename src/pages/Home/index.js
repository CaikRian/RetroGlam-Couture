import React, { useRef, useEffect, useState } from 'react';
import "./style.css";
import logotipo from './img/Logotipo.png';
import icon_facebook from './img/icon_facebook.png';
import icon_instagram from './img/icon_instagram.png';
import icon_x from './img/icon_x.png';

function Home() {
  const containerRef = useRef(null);
  const sections = ['section1', 'section2', 'section3', 'section4'];
  const [scrolling, setScrolling] = useState(true);
  let currentSection = 0;
  let scrollInterval;

  const scrollToNextSection = () => {
    if (scrolling) {
      currentSection = (currentSection + 1) % sections.length;
      const sectionId = sections[currentSection];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    scrollInterval = setInterval(scrollToNextSection, 4000); // Ajuste o intervalo de rolagem em milissegundos

    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrolling]);

  const handleScrollInteraction = () => {
    setScrolling(false);
    setTimeout(() => setScrolling(true), 4000); // Reinicie a rolagem após 3 segundos
  };

  useEffect(() => {
    window.addEventListener('keydown', handleScrollInteraction);
    window.addEventListener('wheel', handleScrollInteraction);

    return () => {
      window.removeEventListener('keydown', handleScrollInteraction);
      window.removeEventListener('wheel', handleScrollInteraction);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="section" id="section1">
        <div className="textoSlogan" id='slogan1'>Reviva a Época, Incorpore o Glamour.</div>
      </div>
      <div className="section" id="section2">
        <div className="textoSlogan" id='slogan2'>O Passado na Moda, o Futuro no Estilo.</div>
      </div>
      <div className="section" id="section3">
        <div className="textoSlogan" id='slogan3'>Crie Sua Própria História de Moda.</div>
      </div>
      <div className="section" id="section4">
        <div className="textoSlogan" id='slogan4'>Autenticidade Retro, Sofisticação Contemporânea.</div>
      </div>
      <div className="section" id="section5">
            <img className="footerLogo" src={logotipo}/>
            <p>Site desenvolvido por Caik</p>
            <div className="footerInfo">
                <p>&copy; 2023 RetroGlam Couture</p>
                <p>Endereço: 123 Fashion Street, Cidade da Moda, País</p>
                <p>Email: info@retroglamcouture.com</p>
                <p>Telefone: +1 (123) 456-7890</p>
            </div>
          <div className="footerSocial">
            <a href="#" class="socialIcon"><img src={icon_facebook}/></a>
            <a href="#" class="socialIcon"><img src={icon_instagram}/></a>
            <a href="#" class="socialIcon"><img src={icon_x}/></a>
          </div>
      </div>
    </div>
  );
}

export default Home;
