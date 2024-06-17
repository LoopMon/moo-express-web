import { createContext, useState } from "react"
import api from "../services/api"

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const signin = async (login, password) => {
        try {
            const response = await api.get("/users")
            const data = response.data

            const user = data.find((user) => {
                if (user.person === login || user.email === login) {
                    return user
                }
            })

            if (!user) {
                return "Usuário inválido"
            }

            if (user.password !== password) {
                return "Senha inválida"
            }

            setUser(user)
            return
        } catch (error) {
            console.log("Erro ao realizar o login", error)
            return "Erro ao realizar o login " + error
        }
    }

    const signup = async (name, person, email, password) => {
        try {
            const response = await api.get("/users")
            const users = response.data

            const user = users.find(
                (user) => user.email === email || user.cod === person,
            )

            if (user) {
                return "E-mail ou CPF/CNPJ já cadastrado"
            }

            const data = await api.post("/users", {
                name,
                cod: person,
                email,
                password,
            })
            return
        } catch (error) {
            console.error("Erro ao cadastrar usuário", error)
            return "Erro ao cadastrar usuário" + error
        }
    }

    const signout = () => {
        setUser(null)
        return
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                onlineUser: !!user,
                signin,
                signup,
                signout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
