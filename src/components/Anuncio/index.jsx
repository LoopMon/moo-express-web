import "./style.css"

function Anuncio({ key, img, preco, titulo, loc, time }) {
    return (
        <div className="card">
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
                        <i class="bi bi-geo-alt"></i>
                        {loc}
                    </span>
                    <span className="time">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Anuncio
