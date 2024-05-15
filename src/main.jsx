import React from "react"
import ReactDOM from "react-dom/client"
// Páginas
import HomeOffLine from "./pages/HomeOffLine"
import LogIn from "./pages/LogIn"
import SignIn from "./pages/SignIn/index.jsx"
// Configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeOnLine from "./pages/HomeOnLine/index.jsx"

const router = createBrowserRouter([
    {
        // Não logado
        path: "/",
        element: <HomeOffLine />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        // Logado
        path: "/home",
        element: <HomeOnLine />,
    },
])
// {
//     // Logado
//     path: "/home",
//     element: <HomeOffLine />,
//     children: [{}],
// },
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
