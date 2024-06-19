import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import HeaderOnLine from "../../components/HeaderOnLine"
import Anuncio from "../../components/Anuncio"
import Footer from "../../components/Footer"
import boi from "../../assets/mercado-do-boi-gordo.png"
import "./styles.css"

function AdPage() {
    const { user } = useAuth()
    const { id } = useParams()
    const [abaActived1, setAbaActived1] = useState(true)
    const [abaActived2, setAbaActived2] = useState(false)
    const [abaActived3, setAbaActived3] = useState(false)
    const dataAtual = new Date()
    const [ad, setAd] = useState({})
    const [ads, setAds] = useState([])

    const formatarData = (data) => {
        const d = new Date(data)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }

    useEffect(() => {
        const buscarAd = async () => {
            const response = await api.get("/Anuncio")
            const data = response.data

            setAds(data)
        }
        buscarAd()
    }, [])

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
            <div id="ad-page">
                <main>
                    <div className="ad-header">
                        <h1>{ad.titulo}</h1>
                        <span>{formatarData(ad.publicacao)}</span>
                    </div>
                    <section className="parte1">
                        <div className="anuncio">
                            <div className="apresentacao">
                                <img src={boi} alt={ad.titulo} />
                            </div>
                            <div className="miniaturas">
                                <img
                                    src={boi}
                                    alt={ad.titulo}
                                    className="img1"
                                />
                                <img
                                    src={boi}
                                    alt={ad.titulo}
                                    className="img2"
                                />
                                <img
                                    src={boi}
                                    alt={ad.titulo}
                                    className="img3"
                                />
                                <img
                                    src={boi}
                                    alt={ad.titulo}
                                    className="img4"
                                />
                            </div>

                            <div className="ad-desc">
                                <div className="abas">
                                    <input
                                        type="radio"
                                        name="aba"
                                        id="aba-descricao"
                                        checked={abaActived1}
                                        onClick={() => {
                                            setAbaActived1(true)
                                            setAbaActived2(false)
                                            setAbaActived3(false)
                                        }}
                                    />
                                    <label htmlFor="aba-descricao">
                                        <span>Descrição</span>
                                    </label>

                                    <input
                                        type="radio"
                                        name="aba"
                                        id="aba-detalhes"
                                        checked={abaActived2}
                                        onClick={() => {
                                            setAbaActived1(false)
                                            setAbaActived2(true)
                                            setAbaActived3(false)
                                        }}
                                    />
                                    <label htmlFor="aba-detalhes">
                                        <span>Detalhes</span>
                                    </label>

                                    <input
                                        type="radio"
                                        name="aba"
                                        id="aba-avaliacoes"
                                        checked={abaActived3}
                                        onClick={() => {
                                            setAbaActived1(false)
                                            setAbaActived2(false)
                                            setAbaActived3(true)
                                        }}
                                    />
                                    <label htmlFor="aba-avaliacoes">
                                        <span>Avaliações (5)</span>
                                    </label>
                                </div>
                                <div className="conteudo">
                                    <div
                                        className={
                                            abaActived1
                                                ? "descricao ativo"
                                                : "descricao"
                                        }
                                    >
                                        {ad.descricao}
                                    </div>
                                    <div
                                        className={
                                            abaActived2
                                                ? "detalhes ativo"
                                                : "detalhes"
                                        }
                                    >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat sint aliquid
                                        dolore maxime hic saepe veritatis
                                        quisquam ex atque quo dicta.
                                    </div>
                                    <div
                                        className={
                                            abaActived3
                                                ? "avaliacoes ativo"
                                                : "avaliacoes"
                                        }
                                    >
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nesciunt beatae rem
                                        tenetur quia, dolorum iusto. Autem,
                                        commodi laborum illum non tempora
                                        repellat accusantium, cum doloremque,
                                        optio ut tenetur. Iste, eius.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dados-compra">
                            <span>
                                <h1>R$ {ad.preco.toFixed(2)}</h1>
                            </span>
                            <span className="estrelas">
                                <span>4.8</span>
                                <span>
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span>(23)</span>
                            </span>
                            <span>
                                Chegará Grátis no dia
                                {dataAtual.getDate() + 4 > 30
                                    ? dataAtual.getDate() + 4 - 30
                                    : dataAtual.getDate() + 4}
                            </span>

                            <span>Estoque Disponível</span>
                            <Link to={"/payad/" + ad.id} id="comprar">
                                Comprar
                            </Link>

                            <span></span>
                            <span>categ do vendedor</span>

                            <div>
                                <i className="bi bi-arrow-90deg-left"></i>
                                <span>
                                    Devolução grátis. Você tem 15 dias a partir
                                    do recebimento.
                                </span>
                            </div>
                            <div>
                                <i className="bi bi-shield-check"></i>
                                <span>
                                    Compra Garantida. Receba o produto que está
                                    esperando ou devolvemos o dinheiro.
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="parte2">
                        <h2>Também podem te interessar</h2>
                        <div>
                            {ads.map((anuncio) => (
                                <Anuncio
                                    key={anuncio.id}
                                    id={anuncio.id}
                                    img={boi}
                                    preco={anuncio.preco}
                                    titulo={anuncio.titulo}
                                    time={formatarData(anuncio.publicacao)}
                                    src={`/ad/${anuncio.id}`}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default AdPage
