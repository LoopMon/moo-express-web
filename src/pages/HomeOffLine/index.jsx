import { useState, useEffect } from "react"
import api from "../../services/api"
import Anuncio from "../../components/Anuncio"
import HeaderOffLine from "../../components/HeaderOffLine"
import PainelAds from "../../components/PainelAds"
import SeletorItens from "../../components/SeletorItens"
import Footer from "../../components/Footer"
import Banner1 from "../../assets/banner.png"
import "./style.css"

const seletores = [
    {
        id: 0,
        categoria: "Raça",
        filtros: ["Raça", "Angus", "Nelore", "Hereford"],
    },
    {
        id: 1,
        categoria: "Idade",
        filtros: ["Idade", "1 a 5 anos", "6 a 10 anos", "10 anos ou mais"],
    },
    {
        id: 2,
        categoria: "Sexo",
        filtros: ["Sexo", "Masculino", "Feminino"],
    },
    {
        id: 3,
        categoria: "Peso",
        filtros: ["Peso", "Menos que 10Kg", "10Kg a 25Kg", "25Kg ou mais"],
    },
    {
        id: 4,
        categoria: "Estados",
        filtros: ["Estados", "RO", "ES", "SP", "MG", "AM"],
    },
    {
        id: 5,
        categoria: "Cor",
        filtros: [
            "Cor",
            "Preto",
            "Branco",
            "Marrom",
            "Vermelho",
            "Cinza",
            "Amarelo",
        ],
    },
]

const banners = [
    {
        id: 0,
        src: Banner1,
        alt: "Moo Ad",
    },
]

const selectorElements = seletores.map((seletor) => (
    <SeletorItens
        key={seletor.id}
        categoria={seletor.categoria}
        valores={seletor.filtros}
    />
))

function HomeOffLine() {
    const [abaActived, setAbaActived] = useState(true)
    const [ads, setAds] = useState([])

    const formatarData = (data) => {
        const d = new Date(data)
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    }

    useEffect(() => {
        const buscarAds = async () => {
            const response = await api.get("/Anuncio")
            const data = response.data

            setAds(data)
        }

        buscarAds()
    }, [])

    return (
        <>
            <HeaderOffLine />
            <div id="home-offline">
                <main>
                    <PainelAds ads={banners} />

                    <div className="mercado">
                        <div className="abas">
                            <input
                                type="radio"
                                name="aba"
                                id="mais-buscados"
                                checked={abaActived}
                                onChange={() => {
                                    setAbaActived(!abaActived)
                                }}
                            />
                            <label htmlFor="mais-buscados">
                                <span>Mais buscados</span>
                            </label>

                            <input type="radio" name="aba" id="mais-recentes" />
                            <label htmlFor="mais-recentes">
                                <span>Mais recentes</span>
                            </label>
                        </div>

                        <div className="filtros">{selectorElements}</div>

                        <div className="anuncios">
                            {ads.map((ad) => (
                                <Anuncio
                                    src={`/ad/${ad.id}`}
                                    id={ad.id}
                                    titulo={ad.titulo}
                                    preco={ad.preco}
                                    img={ad.src}
                                    data={formatarData(ad.publicacao)}
                                />
                            ))}
                        </div>

                        <div className="navegacao">
                            <a href="">Página anterior</a>
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">Proxima página</a>
                            <a href="">Última página</a>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default HomeOffLine
