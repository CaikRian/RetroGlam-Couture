import "./style.css";
import img_about from "./img/img_home8.jpg"
function About(){

    return(
        
            <div className="pages" id="pageHelp">
                <div className="pageDescr">
            <h1>SOBRE NÓS</h1>
            <p>  &nbsp; Na RetroGlam Couture, acreditamos que a moda é uma forma de arte, uma maneira de expressar individualidade
                 e uma maneira de reviver a elegância atemporal de décadas passadas. Fundada por um grupo de entusiastas da
                  moda que compartilham uma paixão por peças vintage, nossa marca nasceu da busca pela sofisticação e pelo 
                  glamour do passado, combinados com um toque contemporâneo.</p>
            
            <h2>Nosso Compromisso com a Moda Vintage e o Glamour</h2>
            <p> &nbsp; Nossa missão é proporcionar a todos a oportunidade de incorporar o glamour das eras passadas em seu estilo 
                de vida moderno. Cada peça em nossa coleção é cuidadosamente selecionada e restaurada para garantir sua autenticidade 
                e qualidade. Valorizamos a singularidade e a história que cada peça carrega, e é por isso que nossa coleção é composta 
                por uma variedade de estilos retrô, desde os elegantes anos 60 até o charme dos anos 80.</p>
            
            <h2>A Arte da Elegância e da Sustentabilidade</h2>
            <p> &nbsp; Na "RetroGlam Couture", acreditamos em unir a elegância com a sustentabilidade. Ao oferecer moda vintage, estamos comprometidos 
                em reduzir o impacto ambiental da indústria da moda e promover o consumo consciente. Cada peça é uma obra de arte por si só, 
                feita para pessoas que apreciam a qualidade, o design e a autenticidade.</p>
            
            <h2>Explore e Viva a Nossa Paixão pela Moda</h2>
            <p> &nbsp; Convidamos você a explorar nossa coleção e reviver o passado com um toque de estilo contemporâneo. Seja um evento especial,
                 uma noite na cidade ou uma ocasião casual, na "RetroGlam Couture," temos a peça perfeita para você. Junte-se a nós enquanto 
                 celebramos a elegância, a autenticidade e a atemporalidade da moda.</p>
           
            <p>Agradecemos por escolher "RetroGlam Couture" como sua destinação de moda vintage e glamour.</p>
            </div>
            <img src={img_about} className="imgAbout"/>
         
        </div>
    );
}

export default About;