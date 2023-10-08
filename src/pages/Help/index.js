import "./style.css";

function Help(){

    return(

        <div className="pages">
            <h1 className="tituloHelp">Ajuda</h1>
            <ul className="menuHelp">
                <li><h2 className="tituloMenuHelp">1. Como Comprar na RetroGlam Couture:</h2>
                    <ul className="subMenuHelp">
                        <li className="subMenuType">Navegando pelo Catálogo: Explore nossa coleção de moda vintage e glamour, organizada por categorias.</li>
                        <li className="subMenuType">Selecionando Itens: Clique em um item para obter detalhes. Escolha o tamanho e a quantidade desejados e clique em "Adicionar ao Carrinho."</li>
                        <li className="subMenuType">Carrinho de Compras: Revise os itens em seu carrinho e siga as etapas para finalizar sua compra.</li>
                        <li className="subMenuType">Pagamento Seguro: Oferecemos opções de pagamento seguro, incluindo cartões de crédito e PayPal.</li>
                    </ul>
                </li>
                <li><h2 className="tituloMenuHelp">2. Política de Devolução e Troca:</h2>
                    <ul className="subMenuHelp">
                        <li className="subMenuType">Aceitamos devoluções dentro de 30 dias a partir da data de compra. Consulte nossa política completa de devoluções e trocas para obter informações detalhadas.</li>
                    </ul>
                </li>
                <li><h2 className="tituloMenuHelp">3. Contate-nos:</h2>
                    <ul className="subMenuHelp">
                        <li className="subMenuType">Se você tiver alguma pergunta, preocupação ou precisar de assistência adicional, nossa equipe de suporte ao cliente está à disposição. Você pode nos contatar:
                            <ul className="subMenuHelp">
                                <li className="subMenuType">E-mail: [inserir endereço de e-mail]</li>
                                <li className="subMenuType">Telefone: [inserir número de telefone]</li>
                                <li className="subMenuType">Chat ao Vivo: Disponível durante o horário comercial</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><h2 className="tituloMenuHelp">4. Privacidade e Segurança:</h2>
                    <ul className="subMenuHelp">
                        <li className="subMenuType">Nós valorizamos sua privacidade e segurança. Saiba mais sobre nossas práticas de privacidade e segurança em nossa Política de Privacidade.</li>
                    </ul>
                </li>
            </ul>
            <p>Agradecemos por escolher a RetroGlam Couture. Seu conforto e satisfação são importantes para nós. Não hesite em entrar em contato se precisar de ajuda 
                adicional ou informações específicas sobre nossos produtos e serviços.</p>
        </div>
    );
}
export default Help;