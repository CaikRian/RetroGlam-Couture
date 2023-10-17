import './style.css';
import { useParams } from 'react-router-dom';
import img1 from "../../pages/CatFem/img/img_home1.jpg";
import img2 from "../../pages/CatFem/img/img_home10.jpg";
import img3 from "../../pages/CatFem/img/img_home11.jpg";
import img4 from "../../pages/CatFem/img/img_home3.jpg";
import img5 from "../../pages/CatFem/img/img_home4.jpg";
import img6 from "../../pages/CatFem/img/img_home5.jpg";
import img7 from "../../pages/CatFem/img/img_home7.jpg";
import img8 from "../../pages/CatMasc/img/img_home20.jpg";
import img9 from "../../pages/CatMasc/img/img_home21.jpg";
import img10 from "../../pages/CatMasc/img/img_home22.jpg";
import img11 from "../../pages/CatMasc/img/img_home23.jpg";
import img12 from "../../pages/CatChild/img/img_home25.jpg";
import img13 from "../../pages/CatChild/img/img_home26.jpg";
import img14 from "../../pages/CatChild/img/img_home27.jpg";

function DescrProd(){

    let imgPrinc;
    const { nomeProduto, valorParcelado, valorTotal, imgProd} = useParams();
    
    if (imgProd == 1) {
        imgPrinc = img1;
    } else if (imgProd == 2) {
        imgPrinc = img2;
    }else if (imgProd == 3) {
        imgPrinc = img3;
    }else if (imgProd == 4 ) {
        imgPrinc = img4;
    }else if (imgProd == 5) {
        imgPrinc = img5;
    }else if (imgProd == 6) {
        imgPrinc = img6;
    }else if (imgProd == 7) {
        imgPrinc = img7;
    }else if (imgProd == 8) {
        imgPrinc = img8;
    }else if (imgProd == 9) {
        imgPrinc = img9;
    }else if (imgProd == 10) {
        imgPrinc = img10;
    }else if (imgProd == 11) {
        imgPrinc = img11;
    }else if (imgProd == 12) {
        imgPrinc = img12;
    }else if (imgProd == 13) {
        imgPrinc = img13;
    }else if (imgProd == 14) {
        imgPrinc = img14;
    }

    return(
        <div className="pages">
            <div className="sectionProds">
                <div className="imgProd">
                    <div className="imgsSec"><img src={imgPrinc} /><img/><img/><img/></div>
                    <img src={imgPrinc} className='imgPrinc'/>
                </div>
                <div className='descrProd'>
                    <p className='tituloProduto'>{nomeProduto}
                        <div className='stars'>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                        </div>
                    </p>
                    
                    <div className='valoresProduto'>
                        <div className='valorAvista'>por {valorTotal} à vista</div>
                        <div className='valorParcelado'>ou {valorParcelado}</div>
                    </div>
                    <div className='opCompraSacola'>
                        <span className='material-symbols-outlined' id='shopping-bag'>shopping_bag</span>
                        <button className='BtnSacola'>COMPRAR</button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default DescrProd;