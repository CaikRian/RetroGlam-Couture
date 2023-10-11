import "./style.css";
import img1 from "./img/img_home1.jpg";
import img2 from "./img/img_home10.jpg";
import img3 from "./img/img_home11.jpg";
import img4 from "./img/img_home3.jpg";
import img5 from "./img/img_home4.jpg";
import img6 from "./img/img_home5.jpg";
import img7 from "./img/img_home7.jpg";

function CatFem(){

    return(
        <div className="pages">
        
        <h1>Moda Feminina</h1>
        <div className="sectionModa">
            <div className="cardModa">
                <img src={img1} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Vestido "Época Dourada"</div>
                    <div className="descrPrest">5x R$ 247,40</div>
                    <div className="descrValor">R$ 1.237,00 </div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img2} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Traje "Retro Radiante"</div>
                    <div className="descrPrest">5x R$ 399,80</div>
                    <div className="descrValor">R$ 1.999,00</div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img3} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Look "Elegância Clássica"</div>
                    <div className="descrPrest">5x R$ 292,60</div>
                    <div className="descrValor">R$ 1.463,00 </div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img4} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Look "Inspiração Nostálgica"</div>
                    <div className="descrPrest">5x R$ 323,60</div>
                    <div className="descrValor">R$ 1.618,00 </div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img5} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Conjunto "Retro Essence"</div>
                    <div className="descrPrest">5x R$ 337,40</div>
                    <div className="descrValor">R$ 1.687,00 </div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img6} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Look "Reflexos do Passado"</div>
                    <div className="descrPrest">5x R$ 387,60</div>
                    <div className="descrValor">R$ 1.938,00  </div>
                </div>
            </div>
            <div className="cardModa">
                <img src={img7} className="pecaModa"/>
                <div className="descrModa">
                    <div className="descrNome">Traje "Elegância Retrô"</div>
                    <div className="descrPrest">5x R$ 387,60</div>
                    <div className="descrValor">R$ 1.938,00 </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default CatFem;