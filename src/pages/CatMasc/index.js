import {useNavigate} from 'react-router-dom';

import img1 from "./img/img_home20.jpg";
import img2 from "./img/img_home21.jpg";
import img3 from "./img/img_home22.jpg";
import img4 from "./img/img_home23.jpg";

function CatMasc(){
    const navigate = useNavigate();
    const enviarEAbriOutraPagina = (nomeProduto, valorParcelado, valorTotal, imgProd) => {
        
        navigate(`/DescrProd/${nomeProduto}/${valorParcelado}/${valorTotal}/${imgProd}`);
      };

    return(
        <div className="pages">
            <h1>Moda Masculina</h1>
            <div className="sectionModa">
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Traje "Elegância Vintage"', '5x R$ 247,40', 'R$ 1.237,00', 8)}>
                    <img src={img1} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Traje "Elegância Vintage"</div>
                        <div className="descrPrest">5x R$ 247,40</div>
                        <div className="descrValor">R$ 1.237,00 </div>
                    </div>
                </div>
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Traje "Elegância do Passado"', '5x R$ 399,80', 'R$ 1.999,00', 9)}>
                    <img src={img2} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Traje "Elegância do Passado"</div>
                        <div className="descrPrest">5x R$ 399,80</div>
                        <div className="descrValor">R$ 1.999,00</div>
                    </div>
                </div>
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Vestuário "Estilo Retrô Urbano"', '5x R$ 292,60', 'R$ 1.463,00', 10)}>
                    <img src={img3} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Vestuário "Estilo Retrô Urbano"</div>
                        <div className="descrPrest">5x R$ 292,60</div>
                        <div className="descrValor">R$ 1.463,00 </div>
                    </div>
                </div>
                <div className="cardModa" onClick={() => enviarEAbriOutraPagina('Roupa "Retro Rebelde"', '5x R$ 323,60', 'R$ 1.618,00', 11)}>
                    <img src={img4} className="pecaModa"/>
                    <div className="descrModa">
                        <div className="descrNome">Roupa "Retro Rebelde"</div>
                        <div className="descrPrest">5x R$ 323,60</div>
                        <div className="descrValor">R$ 1.618,00 </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CatMasc;