import { Link } from "react-router-dom"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import Boi from "../../assets/mercado-do-boi-gordo.png"
import "./style.css"

function MyAds() {
    return (
        <>
            <HeaderOnLine />
            <main id="my-ads">
                <div className="header">
                    <h1>Meus Anúncios</h1>

                    <Link to="/ad-cow">
                        Anunciar gado(s) <i class="bi bi-plus-lg"></i>
                    </Link>

                    <Link to="/ad-cows">
                        Anunciar rebanho <i class="bi bi-plus-lg"></i>
                    </Link>
                </div>

                <div className="abas">
                    <input type="radio" name="aba" id="mais-buscados" checked />
                    <label htmlFor="mais-buscados">
                        <span>Publicados (0)</span>
                    </label>

                    <input type="radio" name="aba" id="mais-recentes" />
                    <label htmlFor="mais-recentes">
                        <span>Expirados (0)</span>
                    </label>
                </div>

                <div className="anuncios">
                    <div className="anuncio">
                        <span>
                            <i class="bi bi-cone-striped"></i>cone
                        </span>

                        <div className="descricao">
                            <img src={Boi} alt="" />
                            <div>
                                <div>
                                    <h3>Iris 8 FIV Valônia</h3>
                                    <span>R$ 9.600.000,00</span>
                                </div>
                                <span>Expirado em: 07/03/24 às 14:06</span>
                            </div>
                        </div>
                    </div>

                    <div className="anuncio">
                        <span>
                            <i class="bi bi-cone-striped"></i>cone
                        </span>

                        <div className="descricao">
                            <img src={Boi} alt="" />
                            <div>
                                <div>
                                    <h3>Iris 8 FIV Valônia</h3>
                                    <span>R$ 9.600.000,00</span>
                                </div>
                                <span>Expirado em: 07/03/24 às 14:06</span>
                            </div>
                        </div>
                    </div>

                    <div className="anuncio">
                        <span>
                            <i class="bi bi-cone-striped"></i>cone
                        </span>

                        <div className="descricao">
                            <img src={Boi} alt="" />
                            <div>
                                <div>
                                    <h3>Iris 8 FIV Valônia</h3>
                                    <span>R$ 9.600.000,00</span>
                                </div>
                                <span>Expirado em: 07/03/24 às 14:06</span>
                            </div>
                        </div>
                    </div>

                    <div className="anuncio">
                        <span>
                            <i class="bi bi-cone-striped"></i>cone
                        </span>

                        <div className="descricao">
                            <img src={Boi} alt="" />
                            <div>
                                <div>
                                    <h3>Iris 8 FIV Valônia</h3>
                                    <span>R$ 9.600.000,00</span>
                                </div>
                                <span>Expirado em: 07/03/24 às 14:06</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MyAds
