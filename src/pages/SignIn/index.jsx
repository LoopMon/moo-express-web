import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Logo from "../../assets/logo.png"
import GoogleIcon from "../../assets/Google-icone.png"
import FacebookIcon from "../../assets/facebook-icone.png"
import Background from "../../assets/bg-login.png"
import "./style.css"

function SignIn() {
    const { signin } = useAuth()
    const [cadastro, setCadastro] = useState("lucas@email.com")
    const [senha, setSenha] = useState("123")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const fazerLogin = async (cadastro, senha) => {
        const response = await signin(cadastro, senha)

        if (response) {
            setError(response)
            return
        }

        navigate("/home")
    }

    return (
        <main id="pg-login">
            <div className="fundo">
                <img src={Background} alt="background" />
            </div>
            <section className="log-in">
                <div className="logo">
                    <img src={Logo} alt="logo MooExpress" />
                    <h1>Bem-vindoo!</h1>
                </div>

                <form
                    action=""
                    onSubmit={(event) => {
                        event.preventDefault()
                        fazerLogin(cadastro, senha)
                    }}
                >
                    <div className="campo">
                        <label htmlFor="login">Login:</label>
                        <input
                            value={cadastro}
                            onChange={(event) => {
                                setCadastro(event.target.value)
                            }}
                            type="text"
                            placeholder="E-mail/CPF/CNPJ"
                            id="login"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            value={senha}
                            onChange={(event) => {
                                setSenha(event.target.value)
                            }}
                            type="password"
                            id="senha"
                            required
                        />
                    </div>

                    <span style={{ color: "red" }}>{error}</span>

                    <button type="submit">Entrar</button>
                </form>

                <span>
                    Não tem uma conta? <Link to="/signup">Casdastre-se</Link>
                </span>
            </section>
        </main>
    )
}

export default SignIn
