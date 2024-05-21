import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./style.css"

function HeaderOffLine() {
    return (
        <header id="header-offline">
            <div className="logo">
                <img src={Logo} alt="Logo moo express" />
            </div>
            <div className="nav-bar">
                {/* Barra de Pesquisa */}
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
            <nav>
                <a href="">
                    <i className="bi bi-grid"></i>
                    <span>Meus anúncios</span>
                </a>

                <a href="">
                    <i className="bi bi-chat-text"></i>
                    <span>Chat</span>
                </a>

                <a href="">
                    <i className="bi bi-bell"></i>
                    <span>Notificações</span>
                </a>

                <Link to="/signin" id="entrar">
                    <span>Entrar</span>
                </Link>

                <Link to="/signin" id="anunciar">
                    <span>Anunciar</span>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderOffLine
