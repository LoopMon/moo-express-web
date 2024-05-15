import "./style.css"

function PainelAds({ ads }) {
    return (
        <div className="banner">
            <div className="painels">
                {ads.map((ad) => (
                    <div className="painel">
                        <img src={ad} alt="" />
                    </div>
                ))}
            </div>

            <span id="left">
                <i class="bi bi-caret-left-fill"></i>
            </span>

            <span id="right">
                <i class="bi bi-caret-right-fill"></i>
            </span>
            <div className="pontos"></div>
        </div>
    )
}

export default PainelAds
