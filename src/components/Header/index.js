import "./style.css";
import img_bag from "./img/img_Bag.png"
import { Link } from 'react-router-dom';
function Header(){

    return(
        <header>
            <div className="headerP1">
                <Link to="/" className="nomeMarca"><span className="letraMarca">R</span>etro<span className="letraMarca">G</span>lam <span className="letraMarca">C</span>outure</Link>
                <ul id="menuDesktop">
                    <li><Link to="/About">Sobre nós</Link></li>
                    <li><Link to="/Help">Ajuda</Link></li>
                    <li><Link to="/">Cadastro/Login</Link></li>
                </ul>
                <div id="menuResponsive">
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
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
                <img src={img_bag}></img>
                </div>
                
            </div>
        </header>
    );
}
export default Header;