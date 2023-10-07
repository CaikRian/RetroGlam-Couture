import React, { useRef, useEffect, useState } from 'react';
import "./style.css";

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
        <div className="textoSlogan">Reviva a Época, Incorpore o Glamour.</div>
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
    </div>
  );
}

export default Home;
