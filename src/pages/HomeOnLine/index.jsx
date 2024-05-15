import Anuncio from "../../components/Anuncio"
import HeaderOnLine from "../../components/HeaderOnLine"
import PainelAds from "../../components/PainelAds"
import SeletorItens from "../../components/SeletorItens"
import lg from "../../assets/mercado-do-boi-gordo.png"
import Banner from "../../assets/banner.png"
import Footer from "../../components/Footer"
import api from "../../services/api"
import "./style.css"
import { useEffect, useState } from "react"

function HomeOnLine() {
    const [person, setPerson] = useState("")

    useEffect(() => {
        async function getPerson() {
            const response = await api.get("/character/2")
            const data = response.data
            setPerson(data.name)
        }

        getPerson()
    }, [])

    return (
        <>
            <HeaderOnLine />
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
                            <Anuncio
                                img={lg}
                                preco={1200000}
                                titulo={
                                    "Iris 8 FIV Valônia, 2 anos de idade, macho, 620kg"
                                }
                                loc={"Baiha, chama"}
                                time={"amanha, 23:23"}
                            />
                            <Anuncio
                                img={lg}
                                preco={1200000}
                                titulo={person}
                                loc="Baiha, chama"
                                time="amanha, 23:23"
                            />
                            <Anuncio
                                img={lg}
                                preco={1200000}
                                titulo="Receba o boi"
                                loc="Baiha, chama"
                                time="amanha, 23:23"
                            />
                            <Anuncio
                                img={lg}
                                preco={1200000}
                                titulo="Receba o boi"
                                loc="Baiha, chama"
                                time="amanha, 23:23"
                            />
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

export default HomeOnLine
