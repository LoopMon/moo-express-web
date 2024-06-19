import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Logo from "../../assets/logo.png"
import "./style.css"

function HeaderOnLine() {
    const { user, signout } = useAuth()
    const [menuOpened, setMenuOpened] = useState(false)

    const navigate = useNavigate()

    return (
        <header id="header-offline">
            <div className="logo">
                <Link to="/home">
                    <img src={Logo} alt="Logo moo express" />
                </Link>
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
                <Link to="/myads">
                    <i className="bi bi-grid"></i>
                    <span>Meus anúncios</span>
                </Link>

                <Link to="/notification">
                    <i className="bi bi-bell"></i>
                    <span>Notificações</span>
                </Link>

                <Link to="" id="entrar">
                    <span>{user.nome}</span>
                </Link>

                <a
                    id="anunciar"
                    onClick={() => {
                        signout()
                        navigate("/signin")
                    }}
                >
                    <span>Sair</span>
                </a>
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

export default HeaderOnLine
