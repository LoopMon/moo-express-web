import { useState } from "react"
import Anuncio from "../../components/Anuncio"
import HeaderOffLine from "../../components/HeaderOffLine"
import PainelAds from "../../components/PainelAds"
import SeletorItens from "../../components/SeletorItens"
import lg from "../../assets/mercado-do-boi-gordo.png"
import Banner1 from "../../assets/banner.png"
import Banner2 from "../../assets/banner-teste.jpg"
import Banner3 from "../../assets/banner-teste2.png"
import Footer from "../../components/Footer"
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
        filtros: ["Masculino", "Feminino"],
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

const ads = [
    {
        id: 0,
        src: Banner1,
        alt: "Moo Ad",
    },
    {
        id: 1,
        src: Banner2,
        alt: "Teste",
    },
    {
        id: 2,
        src: Banner3,
        alt: "Teste",
    },
]

const selectorElements = seletores.map((seletor) => (
    <SeletorItens
        key={seletor.id}
        categoria={seletor.categoria}
        valores={seletor.filtros}
    />
))

const adsElements = anuncios.map((anuncio) => (
    <Anuncio
        key={anuncio.id}
        id={anuncio.id}
        img={anuncio.img}
        preco={anuncio.preco}
        titulo={anuncio.titulo}
        loc={anuncio.loc}
        time={anuncio.time}
    />
))

function HomeOffLine() {
    const [abaActived, setAbaActived] = useState(true)

    return (
        <>
            <HeaderOffLine />
            <div id="home-offline">
                <main>
                    <PainelAds ads={ads} />

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

                        <div className="anuncios">{adsElements}</div>

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
