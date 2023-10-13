import './style.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logotipo from './img/Logotipo.png';
import icon_facebook from './img/icon_facebook.png';
import icon_instagram from './img/icon_instagram.png';
import icon_x from './img/icon_x.png';

function Footer(){

        // Usando o hook useLocation para obter a localização atual da página.
        const location = useLocation();

        // Estado para controlar a visibilidade do rodapé.
        const [isFooterHidden, setIsFooterHidden] = useState(false);
    
        // Função para determinar a classe CSS do rodapé com base na visibilidade.
        const headerClass = () => {
            if (location.pathname === "/") {
            return 'footer footerHidden';
            } else {
            return 'footer';
            }
        };

    return(

        <footer className={headerClass()}>
            
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
      </footer>
      
    );
}
export default Footer;