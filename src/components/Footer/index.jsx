import "./style.css"

function Footer() {
    return (
        <footer>
            <div>
                <span>
                    &copy; Moo Express Ltda. - Rua Fulano de Tal, 123, Vasco -
                    12345-678 - Vila Velha, ES
                </span>
            </div>

            <div className="redes">
                <a href="">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                    <i className="bi bi-instagram"></i>
                </a>
                <a
                    target="_blank"
                    href="https://x.com/litteralyme0/status/1792573599766712594"
                >
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                    <i className="bi bi-tiktok"></i>
                </a>
                <a href="">
                    <i className="bi bi-youtube"></i>
                </a>
                <a href="">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
