import { useState, Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"
import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import "./styles.css"

function CreateAd() {
    const [tela, setTela] = useState("1")
    const navigate = useNavigate()

    return (
        <>
            <HeaderOnLine />
            <div id="create-ad">
                <form
                    action=""
                    onSubmit={(event) => {
                        event.preventDefault()
                        navigate("/myads")
                        return
                    }}
                >
                    <h1>
                        {tela === "1"
                            ? "Informe algumas características do seu gado"
                            : "Crie um título e compartilhe informações adicionais"}
                    </h1>

                    <div className="notificacao">
                        <i className="bi bi-exclamation-circle"></i>
                        <span>Os campos com (*) são obrigatórios</span>
                    </div>
                    <h1>Informações do gado</h1>
                    {tela === "1" ? (
                        <Fragment>
                            <div>
                                <label htmlFor="raca">Raça*</label>
                                <input
                                    type="text"
                                    placeholder="Digite a raça"
                                    id="raca"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="idade">Idade*</label>
                                <input
                                    type="text"
                                    placeholder="Digite a idade"
                                    id="idade"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="sexo">Sexo*</label>
                                <input
                                    type="text"
                                    placeholder="Digite o sexo"
                                    id="sexo"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="peso">Peso*</label>
                                <input
                                    type="text"
                                    placeholder="Digite o peso em Kg"
                                    id="peso"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="Cor">Cor*</label>
                                <input
                                    type="text"
                                    placeholder="Digite a cor do gado"
                                    id="cor"
                                    required
                                />
                            </div>
                            <div className="buttons">
                                <Link
                                    to="/myads"
                                    id="cancelar"
                                    className="button"
                                >
                                    Cancelar
                                </Link>
                                <span
                                    className="button"
                                    href=""
                                    id="avancar"
                                    onClick={() => {
                                        setTela("2")
                                    }}
                                >
                                    Avançar
                                </span>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>
                                <label htmlFor="titulo">Título*</label>
                                <input
                                    type="text"
                                    placeholder="Exemplo: Gado branco"
                                    id="titulo"
                                    required
                                />
                                <span>
                                    Coloque um breve resumo do que você está
                                    anunciando
                                </span>
                            </div>
                            <div>
                                <label htmlFor="info-ad">
                                    Informações adicionais*
                                </label>
                                <textarea
                                    placeholder="Escreva aqui por quê você está anunciando esse gado e infomações adicionais que podem ajudar na venda."
                                    id="info-ad"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cep">
                                    CEP da localização do produto*
                                </label>
                                <input
                                    type="text"
                                    placeholder="00000-000"
                                    id="cep"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="preco">Preço*</label>
                                <input
                                    type="text"
                                    placeholder="R$ 0,00"
                                    id="preco"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="foto">
                                    CEP da localização do produto*
                                </label>
                                <input
                                    type="file"
                                    id="foto"
                                    name="files[]"
                                    multiple
                                />
                            </div>
                            <div className="buttons">
                                <a
                                    className="button"
                                    id="cancelar"
                                    onClick={() => {
                                        setTela("1")
                                    }}
                                >
                                    voltar
                                </a>
                                <button id="avancar" className="button">
                                    Anunciar
                                </button>
                            </div>
                        </Fragment>
                    )}
                </form>
            </div>
            <Footer />
        </>
    )
}

export default CreateAd
