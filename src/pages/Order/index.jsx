import { Link } from "react-router-dom"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import "./styles.css"

const Item = ({ src, titulo, preco, data }) => {
    return (
        <Link to={"/"} className="anuncio">
            <div className="descricao">
                <img src={src} alt={titulo} />
                <div>
                    <div>
                        <h3>{titulo}</h3>
                        <span>R$ {preco.toFixed(2)}</span>
                    </div>
                    <span>Expirado em: {data}</span>
                </div>
            </div>
        </Link>
    )
}

function Order() {
    return (
        <>
            <HeaderOnLine />
            <div id="page-order">
                <main>
                    <div className="notificacao">
                        <i className="bi bi-clock"></i>
                        <span>Aguardando a entrega do produto.</span>
                    </div>
                    <div className="detalhes">
                        <h1>Detalhes da compra</h1>
                        <span>Pedido</span>
                        <span>Data</span>
                    </div>
                    <hr />
                    <div className="anuncio">
                        <Item
                            src={
                                "https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png"
                            }
                            titulo={"Pikachu pistola"}
                            preco={33222}
                            data={"12/09/21"}
                        />
                    </div>
                    <hr />
                    <div className="envio">
                        <h1>Informações de Envio</h1>
                        <span>Entrega por: Correios</span>
                    </div>
                    <hr />
                    <div className="entrega">
                        <h1>Em trânsito</h1>
                        <div>
                            <ul>
                                <li>
                                    <span>Em trânsito</span>
                                    <span>data</span>
                                </li>
                                <li>
                                    <span>Despacho</span>
                                    <span>data</span>
                                </li>
                                <li>
                                    <span>Em preparação</span>
                                    <span>data</span>
                                </li>
                                <li>
                                    <span>Pagamento confirmado</span>
                                    <span>data</span>
                                </li>
                                <li className="check">
                                    <span>Recebemos seu pedido</span>
                                    <span>data</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="desc-entrega">
                        <span>Tipo padrão</span>
                        <span>Transportadora Correios</span>
                        <span>Cód. de Rastreio FKEKFJ123lcpa</span>
                        <br />
                        <span>Destinatário</span>
                        <span>Fulano</span>
                        <span>rua</span>
                        <span>bairro</span>
                        <span>cep</span>
                    </div>
                    <hr />
                    <div className="pagamento">
                        <h1>Pagamento</h1>
                        <span>
                            <span>Valor do produto</span>
                            <span>R$ 9.000.000,00</span>
                        </span>
                        <span>
                            <span>Entrega</span>
                            <span>R$ 0,00</span>
                        </span>
                        <span>
                            <span>Valor Pago</span>
                            <span>R$9.000.000,00</span>
                        </span>
                    </div>
                    <hr />
                    <div className="mais">
                        <h1>Contado do Vendedor</h1>
                        <Link to="/chat" className="contato">
                            <i className="bi bi-chat-text"></i>
                            <span>Fulano</span>
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Order
