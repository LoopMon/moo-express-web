import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import AuthProvider from "./contexts/auth"
import RouteApp from "./routes"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <AuthProvider>
            <RouteApp />
        </AuthProvider>
    </StrictMode>,
)
