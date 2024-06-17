import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import "./styles.css"

function PayAd() {
    const { user } = useAuth()
    const { id } = useParams()

    return (
        <>
            <HeaderOnLine />
            <div id="pay-ad">
                <main>
                    <div className="dados-pessoais">
                        <h1>Dados pessoais</h1>
                        <hr />
                        <div>
                            <span>E-mail</span>
                            <span>Nome</span>
                            <span>Telefone</span>
                            <span>CPF</span>
                        </div>
                    </div>
                    <div className="entrega">
                        <h1>Entrega</h1>
                        <hr />
                        <div>
                            <span>Rua</span>
                            <span>Bairro</span>
                            <span>Cidade</span>
                            <span>Estado</span>
                            <span>CEP</span>
                        </div>
                    </div>
                    <div className="pagamento">
                        <h1>Pagamento</h1>
                        <hr />
                        <div>
                            <div className="forma-pg">
                                <img
                                    src={
                                        "https://www.advocacianunes.com.br/wp-content/uploads/2022/04/logo-pix-icone-1024.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="forma-pg">Pix</div>
                            <div className="forma-pg">Pix</div>
                            <div className="forma-pg">Pix</div>
                            <div className="forma-pg">Pix</div>
                            <div className="forma-pg">Pix</div>
                            <div className="forma-pg">Pix</div>
                        </div>
                    </div>
                    <div className="pagar">
                        <span>Resumo do pedido</span>
                        <ul>
                            <li>Nome da Vaca</li>
                        </ul>
                        <hr />
                        <span>
                            <span>Valor do produto</span>
                            <span>R$ 33.000,00</span>
                        </span>
                        <span>
                            <span>Entrega</span>
                            <span>Grátis</span>
                        </span>
                        <hr />
                        <span>
                            <span>Total</span>
                            <span>R$ 33.000,00</span>
                        </span>
                        <Link to={`/order/${id}`}>Finalizar Compra</Link>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default PayAd
