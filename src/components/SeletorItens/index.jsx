import { useState } from "react"
import "./style.css"

function SeletorItens({ categoria, valores }) {
    const [selectedValue, setSelectedValue] = useState(categoria)

    return (
        <div className="select">
            <div className="category-select">
                <input type="checkbox" id="options-view-button" />

                <div id="select-button">
                    <div id="selected-value">{selectedValue}</div>

                    <div className="icones">
                        <i data-direction="down" class="bi bi-chevron-down"></i>
                        <i data-direction="up" class="bi bi-chevron-up"></i>
                    </div>
                </div>
            </div>

            <ul id="options">
                {valores.map((valor) => (
                    <li className="option">
                        <input
                            type="radio"
                            name="categoria"
                            value={valor}
                            onClick={() => {
                                setSelectedValue(valor)
                            }}
                        />
                        <span>{valor}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SeletorItens
