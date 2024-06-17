import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import HeaderOnLine from "../../components/HeaderOnLine"
import Anuncio from "../../components/Anuncio"
import Footer from "../../components/Footer"
import lg from "../../assets/mercado-do-boi-gordo.png"
import "./styles.css"

const anuncios = [
    {
        id: 0,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
    {
        id: 1,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
    {
        id: 2,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
]

const adsElements = anuncios.map((anuncio) => (
    <Anuncio
        key={anuncio.id}
        id={anuncio.id}
        img={anuncio.img}
        preco={anuncio.preco}
        titulo={anuncio.titulo}
        loc={anuncio.loc}
        time={anuncio.time}
        src={`/ad/${anuncio.id}`}
    />
))

function AdPage() {
    const { user } = useAuth()
    const { id } = useParams()
    const [abaActived1, setAbaActived1] = useState(true)
    const [abaActived2, setAbaActived2] = useState(false)
    const [abaActived3, setAbaActived3] = useState(false)

    return (
        <>
            <HeaderOnLine />
            <div id="ad-page">
                <main>
                    <div className="ad-header">
                        <h1>Nome da Vaca</h1>
                        <span>Data pulicação</span>
                    </div>
                    <section className="parte1">
                        <div className="anuncio">
                            <div className="apresentacao">
                                <img src={lg} />
                            </div>
                            <div className="miniaturas">
                                <img src={lg} className="img1" />
                                <img src={lg} className="img2" />
                                <img src={lg} className="img3" />
                                <img src={lg} className="img4" />
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
                                        LAAAAAA
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
                                        adipisicing elit. Nesciunt laborum, est
                                        velit reiciendis vel fugit consequuntur?
                                        Accusamus quod blanditiis dolores labore
                                        qui, quisquam facilis non, veniam quos,
                                        laudantium vitae. Rerum.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dados-compra">
                            <span>
                                <h1>R$ 9.600.000,00</h1>
                            </span>
                            <span className="estrelas">
                                <span>4.8</span>
                                <span>
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span>(231)</span>
                            </span>
                            <span>Chegará Grátis sexta-feira 26 de abril</span>

                            <span>Estoque Disponível</span>
                            <Link to="/payad/0" id="comprar">
                                Comprar
                            </Link>
                            <a href="" id="add-carrinho">
                                Adicionar ao Carrinho
                            </a>

                            <span>Vendedor</span>
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
                        <div>{adsElements}</div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default AdPage
