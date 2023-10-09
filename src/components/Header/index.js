import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import img_bag from './img/img_Bag.png';

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

        if(OpMenuResponsive.style.display !== 'flex'){
            OpMenuResponsive.style.display = 'flex';

        } else{
            OpMenuResponsive.style.display = 'none';
        }
    }

  return (
    <header className={headerClass()}>
      <div className="headerP1">
        <Link to="/" className="nomeMarca"><span className="letraMarca">R</span>etro<span className="letraMarca">G</span>lam <span className="letraMarca">C</span>outure</Link>
        <ul id="menuDesktop">
          <li><Link to="/About">Sobre nós</Link></li>
          <li><Link to="/Help">Ajuda</Link></li>
          <li><Link to="/">Cadastro/Login</Link></li>
        </ul>
        <div id="menuResponsive" onClick={BtnMenuResponsive}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </div>
        <div id='OpMenuResponsive'>
            <Link to="/About">Sobre nós</Link>
            <Link to="/Help">Ajuda</Link>
            <Link to="/">Cadastro/Login</Link>
        </div>
      </div>
      
      <div className="headerP2">
        <ul className="linkCatalogos">
          <li><a href="#">MULHER</a></li>
          <li><a href="#">HOMEM</a></li>
          <li><a href="#">INFANTIL</a></li>
        </ul>
        <div className="divPesquisa">
          <input type="text" placeholder="Pesquisar"></input>
          <img src={img_bag} alt="Sacola de compras"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
