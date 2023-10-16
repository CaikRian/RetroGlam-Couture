import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Header() {

    // Usando o hook useLocation para obter a localização atual da página.
    const location = useLocation();

    // Estado para controlar a posição de rolagem anterior e a visibilidade do cabeçalho.
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    // Função para determinar a classe CSS do cabeçalho com base na visibilidade.
    const headerClass = () => {
        if (isHeaderHidden) {
        return 'header headerHidden';
        } else if (location.pathname === "/") {
        return 'header';
        } else {
        return 'header headerPages';
        }
    };

    // Efeito de rolagem para controlar a visibilidade do cabeçalho.
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Verifica se estamos rolando para baixo e a posição está suficientemente abaixo do topo (100 pixels neste exemplo).
        if (currentScrollY > prevScrollY && currentScrollY > 70) {
            setIsHeaderHidden(true); // Oculta o cabeçalho.
        } else {
            // Rolagem para cima ou não é suficientemente abaixo do topo.
            setIsHeaderHidden(false); // Mostra o cabeçalho.
        }

        setPrevScrollY(currentScrollY);
        };

        // Adiciona um ouvinte de rolagem à janela do navegador.
        window.addEventListener('scroll', handleScroll);

        // Remove o ouvinte de rolagem quando o componente é desmontado.
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    function BtnMenuResponsive(){
        const OpMenuResponsive = document.getElementById("OpMenuResponsive");
  
        const line1 = document.getElementById("line1");
        const line2 = document.getElementById("line2");
        const line3 = document.getElementById("line3");

        if(OpMenuResponsive.style.opacity !== '1'){
            
            OpMenuResponsive.style.right = '0';
            line1.style.top = '50%';
            line2.style.top = '50%';
            line3.style.top = '50%';
            line1.style.transform = 'rotate(45deg)';
            line2.style.transform = 'rotate(45deg)';
            line3.style.transform = 'rotate(-45deg)';
            OpMenuResponsive.style.opacity = 1;
        } else{
            
            OpMenuResponsive.style.right = '-100%';
            line1.style.transform = 'rotate(0deg)';
            line2.style.transform = 'rotate(0deg)';
            line3.style.transform = 'rotate(0deg)';
            line1.style.top = '40%';
            line2.style.top = '60%';
            line3.style.top = '80%';
            OpMenuResponsive.style.opacity = 0;

            
        }
    }

    function fecharMenuResp(){

      const OpMenuResponsive = document.getElementById("OpMenuResponsive");
      const line1 = document.getElementById("line1");
      const line2 = document.getElementById("line2");
      const line3 = document.getElementById("line3");

      OpMenuResponsive.style.right = '-100%';
      OpMenuResponsive.style.opacity = '0';
      line1.style.transform = 'rotate(0deg)';
      line2.style.transform = 'rotate(0deg)';
      line3.style.transform = 'rotate(0deg)';
      line1.style.top = '40%';
      line2.style.top = '60%';
      line3.style.top = '80%';

    }

  return (
    <header className={headerClass()}>
      <div className="headerP1">
        <Link to="/" className="nomeMarca"  onClick={fecharMenuResp}><span className="letraMarca">R</span>etro<span className="letraMarca">G</span>lam <span className="letraMarca">C</span>outure</Link>
        <ul id="menuDesktop">
          <li><Link to="/About">Sobre nós</Link></li>
          <li><Link to="/Help">Ajuda</Link></li>
          <li><Link to="/FormCad">Cadastro</Link> | <Link to="/FormLogin">Login</Link></li>
        </ul>
        <div id="menuResponsive" onClick={BtnMenuResponsive}>
          <div className="lines" id='line1'></div>
          <div className="lines" id='line2'></div>
          <div className="lines" id='line3'></div>
        </div>
        <div id='OpMenuResponsive'>
            <Link to="/About" className='OptionsMenuResp' onClick={fecharMenuResp}>Sobre nós</Link>
            <Link to="/Help" className='OptionsMenuResp' onClick={fecharMenuResp}>Ajuda</Link>
            <Link to="/FormCad" className='OptionsMenuResp' onClick={fecharMenuResp}>Cadastro</Link>
            <Link to="/FormLogin" className='OptionsMenuResp' onClick={fecharMenuResp}>Login</Link>
            
        </div>
      </div>
      
      <div className="headerP2">
        <ul className="linkCatalogos">
          <li><Link to="/CatFem">FEMININO</Link></li>
          <li><Link to="/CatMasc">MASCULINO</Link></li>
          <li><Link to="/CatChild">INFANTIL</Link></li>
        </ul>
        <div className="divPesquisa">
          <span className='material-symbols-outlined' id='shopping-bag'>shopping_bag</span>
          <input type="text" placeholder="Pesquisar"></input>
          <span className='material-symbols-outlined' id='search'>search</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
