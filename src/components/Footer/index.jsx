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
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                    <i class="bi bi-twitter-x"></i>
                </a>
                <a href="">
                    <i class="bi bi-tiktok"></i>
                </a>
                <a href="">
                    <i class="bi bi-youtube"></i>
                </a>
                <a href="">
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
