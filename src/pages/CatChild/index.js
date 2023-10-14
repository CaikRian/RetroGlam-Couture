import { useNavigate } from 'react-router-dom';
import img1 from "./img/img_home25.jpg";
import img2 from "./img/img_home26.jpg";
import img3 from "./img/img_home27.jpg";
function CatFem(){
    const navigate = useNavigate();
    const enviarEAbriOutraPagina = (nomeProduto, valorParcelado, valorTotal, imgProd) => {
        
        navigate(`/DescrProd/${nomeProduto}/${valorParcelado}/${valorTotal}/${imgProd}`);
      };
    return(
        <div className="pages">
            <h1>Moda Infantil</h1>
            <div className="sectionModa">
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Vestuário "Pequenos Exploradores Retrô"', '5x R$ 247,40', 'R$ 1.237,00', 12)}>
                    <img src={img1} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Vestuário "Pequenos Exploradores Retrô"</div>
                        <div className="descrPrest">5x R$ 247,40</div>
                        <div className="descrValor">R$ 1.237,00 </div>
                    </div>
                </div>
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Roupinhas "Infância Nostálgica"', '5x R$ 399,80', 'R$ 1.999,00', 13)}>
                    <img src={img2} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Roupinhas "Infância Nostálgica"</div>
                        <div className="descrPrest">5x R$ 399,80</div>
                        <div className="descrValor">R$ 1.999,00</div>
                    </div>
                </div>
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Traje "Mini Estilo Vintage"', '5x R$ 292,60', 'R$ 1.463,00', 14)}>
                    <img src={img3} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Traje "Mini Estilo Vintage"</div>
                        <div className="descrPrest">5x R$ 292,60</div>
                        <div className="descrValor">R$ 1.463,00 </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CatFem;