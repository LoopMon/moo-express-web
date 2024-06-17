import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./style.css"

function HeaderOffLine() {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <header id="header-offline">
            <div className="logo">
                <img src={Logo} alt="Logo moo express" />
            </div>

            {/* Barra de Pesquisa */}
            <div className="search-bar">
                <div className="bar">
                    <input
                        type="text"
                        placeholder="Pesquisar raças, idade, etc..."
                    />
                    <a href="">
                        <i className="bi bi-search"></i>
                    </a>
                </div>
            </div>
            {/* Fim Barra de Pesquisa */}

            <nav className={menuOpened ? "open" : ""}>
                <Link to="/signin">
                    <i className="bi bi-grid"></i>
                    <span>Meus anúncios</span>
                </Link>

                <Link to="/signin">
                    <i className="bi bi-bell"></i>
                    <span>Notificações</span>
                </Link>

                <Link to="/signin" id="entrar">
                    <span>Entrar</span>
                </Link>

                <Link to="/signin" id="anunciar">
                    <span>Anunciar</span>
                </Link>
            </nav>

            <div
                className="menu"
                onClick={() => {
                    setMenuOpened(!menuOpened)
                }}
            >
                {menuOpened ? (
                    <i className="bi bi-x-lg"></i>
                ) : (
                    <i className="bi bi-list"></i>
                )}
            </div>
        </header>
    )
}

export default HeaderOffLine
