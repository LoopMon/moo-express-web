import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import "./styles.css"

function PayAd() {
    const { user } = useAuth()
    const { id } = useParams()
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [cep, setCep] = useState("")
    const [formaPagamento, setFormaPagamento] = useState("pix")
    const [ad, setAd] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const buscarAd = async () => {
            const response = await api.get("/Anuncio/" + id)
            const data = response.data

            setAd(data)
        }
        buscarAd()
    }, [])

    return (
        <>
            <HeaderOnLine />
            <div id="pay-ad">
                <form
                    onSubmit={(event) => {
                        event.preventDefault()

                        navigate("/order/" + id)
                    }}
                >
                    <div className="dados-pessoais">
                        <h1>Dados pessoais</h1>
                        <hr />
                        <div>
                            <span>
                                E-mail
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                Nome
                                <input
                                    type="text"
                                    value={user?.nome}
                                    disabled
                                    style={{
                                        backgroundColor: "#ddd",
                                        cursor: "not-allowed",
                                    }}
                                />
                            </span>
                            <span>
                                Telefone
                                <input
                                    type="text"
                                    value={telefone}
                                    onChange={(event) => {
                                        setTelefone(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                CPF
                                <input
                                    type="text"
                                    value={user?.codigo}
                                    disabled
                                    style={{
                                        backgroundColor: "#ddd",
                                        cursor: "not-allowed",
                                    }}
                                />
                            </span>
                        </div>
                    </div>

                    <div className="entrega">
                        <h1>Entrega</h1>
                        <hr />
                        <div>
                            <span>
                                Rua
                                <input
                                    type="text"
                                    value={rua}
                                    onChange={(event) => {
                                        setRua(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                Bairro
                                <input
                                    type="text"
                                    value={bairro}
                                    onChange={(event) => {
                                        setBairro(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                Cidade
                                <input
                                    type="text"
                                    value={cidade}
                                    onChange={(event) => {
                                        setCidade(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                Estado
                                <input
                                    type="text"
                                    value={estado}
                                    onChange={(event) => {
                                        setEstado(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                            <span>
                                CEP
                                <input
                                    type="text"
                                    value={cep}
                                    onChange={(event) => {
                                        setCep(event.target.value)
                                    }}
                                    required
                                />
                            </span>
                        </div>
                    </div>

                    <div className="pagamento">
                        <h1>Pagamento</h1>
                        <hr />
                        <div>
                            <div
                                style={
                                    formaPagamento === "pix"
                                        ? { borderColor: "#38B449" }
                                        : { borderColor: "#000" }
                                }
                                className="forma-pg"
                                onClick={() => {
                                    setFormaPagamento("pix")
                                }}
                            >
                                <img
                                    src={
                                        "https://www.advocacianunes.com.br/wp-content/uploads/2022/04/logo-pix-icone-1024.png"
                                    }
                                    alt=""
                                />
                                Pix
                            </div>
                            <div
                                style={
                                    formaPagamento === "crédito"
                                        ? { borderColor: "#38B449" }
                                        : { borderColor: "#000" }
                                }
                                className="forma-pg"
                                onClick={() => {
                                    setFormaPagamento("crédito")
                                }}
                            >
                                <img
                                    src={
                                        "https://prints.ultracoloringpages.com/26394191ee3b0e1409d127324c3a5d56.png"
                                    }
                                    alt=""
                                />
                                Cartão de Crédito
                            </div>
                            <div
                                style={
                                    formaPagamento === "mercado pago"
                                        ? { borderColor: "#38B449" }
                                        : { borderColor: "#000" }
                                }
                                className="forma-pg"
                                onClick={() => {
                                    setFormaPagamento("mercado pago")
                                }}
                            >
                                <img
                                    style={{ width: "100%" }}
                                    src={
                                        "https://brandlogos.net/wp-content/uploads/2022/07/mercado_pago-logo_brandlogos.net_tvxwb-512x512.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div
                                style={
                                    formaPagamento === "boleto"
                                        ? { borderColor: "#38B449" }
                                        : { borderColor: "#000" }
                                }
                                className="forma-pg"
                                onClick={() => {
                                    setFormaPagamento("boleto")
                                }}
                            >
                                <img
                                    style={{ width: "100%" }}
                                    src={
                                        "https://imagepng.org/wp-content/uploads/2019/09/boleto-simbolo.png"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pagar">
                        <span>Resumo do pedido</span>
                        <ul>
                            <li>{ad.titulo}</li>
                        </ul>
                        <hr />
                        <span>
                            <span>Valor do produto</span>
                            <span>R$ {ad.preco}</span>
                        </span>
                        <span>
                            <span>Entrega</span>
                            <span>Grátis</span>
                        </span>
                        <hr />
                        <span>
                            <span>Total</span>
                            <span>R$ {ad.preco}</span>
                        </span>
                        <button>Finalizar Compra</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default PayAd
