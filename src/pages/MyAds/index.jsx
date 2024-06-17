import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import Boi from "../../assets/mercado-do-boi-gordo.png"
import "./style.css"

const Item = ({ src, titulo, preco, data }) => {
    return (
        <div className="anuncio">
            <span>
                <i class="bi bi-cone-striped"></i> Expirado
            </span>

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
        </div>
    )
}

const anuncios = []

function MyAds() {
    const [abaSelecionada1, setAbaSelecionada1] = useState(true)
    const [abaSelecionada2, setAbaSelecionada2] = useState(false)

    return (
        <>
            <HeaderOnLine />
            <main id="my-ads">
                <div className="header">
                    <h1>Meus Anúncios</h1>

                    <Link to="/createad">
                        Anunciar gado(s) <i class="bi bi-plus-lg"></i>
                    </Link>
                </div>

                <div className="abas">
                    <input
                        type="radio"
                        name="aba"
                        id="mais-buscados"
                        checked={abaSelecionada1}
                        onChange={() => setAbaSelecionada1(!abaSelecionada1)}
                    />
                    <label htmlFor="mais-buscados">
                        <span>Publicados (0)</span>
                    </label>

                    <input
                        type="radio"
                        name="aba"
                        id="mais-recentes"
                        checked={abaSelecionada2}
                        onChange={() => setAbaSelecionada2(!abaSelecionada2)}
                    />
                    <label htmlFor="mais-recentes">
                        <span>Expirados (0)</span>
                    </label>
                </div>

                <div className="anuncios">
                    {anuncios[0] ? (
                        anuncios.map((anuncio, index) => (
                            <Item
                                key={index}
                                src={anuncio.src}
                                titulo={anuncio.titulo}
                                preco={anuncio.preco}
                                data={anuncio.data}
                            />
                        ))
                    ) : (
                        <span style={{ margin: "auto", fontSize: "2rem" }}>
                            Sem anúncios
                        </span>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MyAds
