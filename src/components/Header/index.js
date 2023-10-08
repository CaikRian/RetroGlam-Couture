import "./style.css";
import img_bag from "./img/img_Bag.png"
function Header(){

    return(
        <header>
            <div className="headerP1">
                <span className="nomeMarca"><span className="letraMarca">R</span>etro<span className="letraMarca">G</span>lam <span className="letraMarca">C</span>outure</span>
                <ul id="menuDesktop">
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Cadastro/Login</a></li>
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