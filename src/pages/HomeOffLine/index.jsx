import Anuncio from "../../components/Anuncio"
import HeaderOffLine from "../../components/HeaderOffLine"
import PainelAds from "../../components/PainelAds"
import SeletorItens from "../../components/SeletorItens"
import lg from "../../assets/mercado-do-boi-gordo.png"
import Banner from "../../assets/banner.png"
import Footer from "../../components/Footer"
import "./style.css"

const anuncios = [
    {
        key: 0,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
    {
        key: 1,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
    {
        key: 2,
        img: lg,
        preco: 120000,
        titulo: "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg",
        loc: "Bahia, chama",
        time: "amanha, 23:23",
    },
]

function HomeOffLine() {
    return (
        <>
            <HeaderOffLine />
            <div id="home-offline">
                <main>
                    <PainelAds ads={[Banner, Banner]} />
                    <div className="mercado">
                        <div className="abas">
                            <input
                                type="radio"
                                name="aba"
                                id="mais-buscados"
                                checked
                            />
                            <label htmlFor="mais-buscados">
                                <span>Mais buscados</span>
                            </label>

                            <input type="radio" name="aba" id="mais-recentes" />
                            <label htmlFor="mais-recentes">
                                <span>Mais recentes</span>
                            </label>
                        </div>

                        <div className="filtros">
                            <SeletorItens
                                key={0}
                                categoria="Raça"
                                valores={[
                                    "Raça",
                                    "Angus",
                                    "Nelore",
                                    "Hereford",
                                ]}
                            />
                            <SeletorItens
                                key={1}
                                categoria="Idade"
                                valores={[
                                    "Idade",
                                    "1 a 5 anos",
                                    "6 a 10 anos",
                                    "10 anos ou mais",
                                ]}
                            />
                            <SeletorItens
                                key={2}
                                categoria="Sexo"
                                valores={["Sexo", "Masculino", "Feminino"]}
                            />
                            <SeletorItens
                                key={3}
                                categoria="Peso"
                                valores={[
                                    "Peso",
                                    "Menos que 10Kg",
                                    "10Kg a 25Kg",
                                    "25Kg ou mais",
                                ]}
                            />
                            <SeletorItens
                                key={4}
                                categoria="Estado"
                                valores={["Estado", "RO", "SP", "ES"]}
                            />
                            <SeletorItens
                                key={5}
                                categoria="Cor"
                                valores={[
                                    "Cor",
                                    "Preto",
                                    "Branco",
                                    "Marrom",
                                    "Vermelho",
                                    "Cinza",
                                    "Amarelo",
                                ]}
                            />
                        </div>

                        <div className="anuncios">
                            {anuncios.map((anuncio) => (
                                <Anuncio
                                    key={anuncio.key}
                                    img={anuncio.img}
                                    preco={anuncio.preco}
                                    titulo={anuncio.titulo}
                                    loc={anuncio.loc}
                                    time={anuncio.time}
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
