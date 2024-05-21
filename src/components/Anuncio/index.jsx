import { Link } from "react-router-dom"
import "./style.css"

function Anuncio({ id, img, preco, titulo, loc, time }) {
    return (
        <Link to={`/ad/${id}`} className="card">
            <div className="foto">
                <img src={img} alt={titulo} />
            </div>

            <div className="informacoes">
                <div>
                    <span className="preco">R$ {preco.toFixed(2)}</span>
                    <span className="titulo">{titulo}</span>
                </div>

                <div>
                    <span className="localizacao">
                        <i className="bi bi-geo-alt"></i>
                        {loc}
                    </span>
                    <span className="time">{time}</span>
                </div>
            </div>
        </Link>
    )
}

export default Anuncio
