import { Fragment } from "react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import HomeOffLine from "../pages/HomeOffLine"
import HomeOnLine from "../pages/HomeOnLine"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import NotificationPage from "../pages/NotificationPage"
import MyAds from "../pages/MyAds"
import AdPage from "../pages/AdPage"
import PayAd from "../pages/PayAd"
import Order from "../pages/Order"
import CreateAd from "../pages/CreateAd"

const Error404 = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link
                to="/"
                style={{ color: "blue", fontSize: "5rem", textAlign: "center" }}
            >
                <h1> Error: 404</h1>
                Voltar para home
            </Link>
        </div>
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
                    <Route path="/myads" element={<MyAds />} />
                    <Route path="/createad" element={<CreateAd />} />
                    <Route path="/ad/:id" element={<AdPage />} />
                    <Route path="payad/:id" element={<PayAd />} />
                    <Route path="/order/:id" element={<Order />} />
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
