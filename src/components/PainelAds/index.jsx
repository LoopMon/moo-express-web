import { useState, useEffect } from "react"
import "./style.css"

function PainelAds({ ads }) {
    const [selectActive, setSelectActive] = useState(0)
    const [adsArray, setAdsArray] = useState(ads)

    useEffect(() => {
        setAdsArray(
            adsArray.map((ad) => {
                return {
                    id: ad.id,
                    src: ad.src,
                    alt: ad.alt,
                    actived: selectActive === ad.id ? true : false,
                }
            }),
        )
    }, [])

    const toggleSelected = () => {
        const banner = document.querySelector(".banner")
        banner.classList.remove("ativo")

        if (selectActive < 0) {
            setSelectActive(adsArray.length - 1)
        } else if (selectActive >= adsArray.length) {
            setSelectActive(0)
        }

        setAdsArray(
            adsArray.map((ad) => {
                return {
                    id: ad.id,
                    src: ad.src,
                    alt: ad.alt,
                    actived: selectActive === ad.id ? true : false,
                }
            }),
        )
    }

    const bannerElements = adsArray.map((ad) => (
        <div className={`banner ${ad.actived ? "ativo" : ""}`} key={ad.id}>
            <img src={ad.src} alt={ad.alt} />
        </div>
    ))

    const pointsElements = adsArray.map((ad) => (
        <span
            className={`ponto ${ad.actived ? "ativo" : ""}`}
            key={ad.id}
        ></span>
    ))

    return (
        <div id="painel">
            <div className="banners">{bannerElements}</div>

            <span
                id="left"
                onClick={() => {
                    setSelectActive(selectActive - 1)
                    toggleSelected()
                }}
            >
                <i className="bi bi-caret-left-fill"></i>
            </span>

            <span
                id="right"
                onClick={() => {
                    setSelectActive(selectActive + 1)
                    toggleSelected()
                }}
            >
                <i className="bi bi-caret-right-fill"></i>
            </span>

            <div className="pontos">{pointsElements}</div>
        </div>
    )
}

export default PainelAds
