import { useState } from "react"
import "./style.css"

function SeletorItens({ categoria, valores }) {
    const [checked, setChecked] = useState(false)
    const [selectedValue, setSelectedValue] = useState(categoria)

    return (
        <div className="select">
            <div className="category-select">
                <input
                    type="checkbox"
                    id="options-view-button"
                    checked={checked}
                    onChange={() => {
                        setChecked(!checked)
                    }}
                />

                <div id="select-button">
                    <div id="selected-value">{selectedValue}</div>

                    <div className="icones">
                        <i
                            data-direction="down"
                            className="bi bi-chevron-down"
                        ></i>
                        <i data-direction="up" className="bi bi-chevron-up"></i>
                    </div>
                </div>
            </div>

            <ul id="options">
                {valores.map((valor, index) => (
                    <li className="option" key={index}>
                        <input
                            type="radio"
                            name="categoria"
                            value={valor}
                            onChange={() => {
                                setSelectedValue(valor)
                                setChecked(false)
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
