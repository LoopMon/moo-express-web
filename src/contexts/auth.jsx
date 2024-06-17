import { createContext, useState } from "react"
import api from "../services/api"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ nome: "lucas" })

    const signup = async (name, cod, email, password) => {
        const users = await api.get("/users")

        console.log(users)
    }

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
