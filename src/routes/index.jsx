import { Fragment } from "react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import HomeOffLine from "../pages/HomeOffLine"
import HomeOnLine from "../pages/HomeOnLine"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import NotificationPage from "../pages/NotificationPage"
import ChatPage from "../pages/ChatPage"
import MyAds from "../pages/MyAds"

const Error404 = () => {
    return (
        <>
            <h1> Error: 404</h1>
            <Link to="/" style={{ color: "blue" }}>
                Voltar para home
            </Link>
        </>
    )
}

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomeOffLine />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<HomeOnLine />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/myads" element={<MyAds />} />
                    <Route
                        path="/notification"
                        element={<NotificationPage />}
                    />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RouteApp
