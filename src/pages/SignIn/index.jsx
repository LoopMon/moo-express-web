import Logo from "../../assets/logo.png"
import GoogleIcon from "../../assets/Google-icone.png"
import FacebookIcon from "../../assets/facebook-icone.png"
import Background from "../../assets/bg-login.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./style.css"

function SignIn() {
    const [cadastro, setCadastro] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

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
                        const data = localStorage.getItem(cadastro)

                        if (data == null) {
                            alert("Usuário não existe")
                            return
                        }

                        const json = JSON.parse(data)

                        if (
                            (json.email === cadastro ||
                                json.pessoa === cadastro) &&
                            json.senha === senha
                        ) {
                            localStorage.setItem("logado", json.nome)
                            navigate("/home")
                        }
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

                    <button type="submit">Entrar</button>
                </form>

                <div className="se-conecte">
                    <span>
                        <span>ou conecte com</span>
                    </span>
                    <div className="conexoes">
                        <a href="">
                            <img src={GoogleIcon} alt="google" />
                        </a>
                        <a href="">
                            <img src={FacebookIcon} alt="facebook" />
                        </a>
                    </div>
                </div>

                <span>
                    Não tem uma conta? <Link to="/signup">Casdastre-se</Link>
                </span>
            </section>
        </main>
    )
}

export default SignIn
