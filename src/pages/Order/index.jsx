import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import api from "../../services/api"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import boi from "../../assets/mercado-do-boi-gordo.png"
import "./styles.css"

const Item = ({ id, src, titulo, preco, data }) => {
    return (
        <Link to={`/ad/${id}`} className="anuncio">
            <div className="descricao">
                <img src={src} alt={titulo} />
                <div>
                    <div>
                        <h3>{titulo}</h3>
                        <span>R$ {preco}</span>
                    </div>
                    <span>Expirado em: {data}</span>
                </div>
            </div>
        </Link>
    )
}

function Order() {
    const { user } = useAuth()
    const { id } = useParams()
    const [ad, setAd] = useState({})
    const [endereco, setEndereco] = useState()

    const formatarData = (data) => {
        const d = new Date(data)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }

    useEffect(() => {
        const buscarAd = async () => {
            const response1 = await api.get("/Anuncio/" + id)
            const data1 = response1.data
            const response2 = await api.get("/Endereco_entrega")
            const data2 = response2.data

            const endereco = data2.find((end) => {
                return end.vendaId == data1.id
            })

            setEndereco(endereco)
            setAd(data1)
        }
        buscarAd()
    }, [])

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
                        <span>Data {formatarData(ad.publicacao)}</span>
                    </div>
                    <hr />
                    <div className="anuncio">
                        <Item
                            src={boi}
                            titulo={ad.titulo}
                            preco={ad.preco}
                            data={formatarData(ad.publicacao)}
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
                        <span>{user.nome}</span>
                        <span>rua</span>
                        <span>bairro</span>
                        <span>cep</span>
                    </div>
                    <hr />
                    <div className="pagamento">
                        <h1>Pagamento</h1>
                        <span>
                            <span>Valor do produto</span>
                            <span>R$ {ad.preco}</span>
                        </span>
                        <span>
                            <span>Entrega</span>
                            <span>R$ 0,00</span>
                        </span>
                        <span>
                            <span>Valor Pago</span>
                            <span>R$ {ad.preco}</span>
                        </span>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Order
