import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import RouteApp from "./routes"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <RouteApp />
    </StrictMode>,
)
