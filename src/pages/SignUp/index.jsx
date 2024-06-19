import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Logo from "../../assets/logo.png"
import "./style.css"

function SignUp() {
    const { signup } = useAuth()
    const [nome, setNome] = useState("")
    const [pessoa, setPessoa] = useState("")
    const [personSelected, setPersonSelected] = useState("CPF")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmSenha, setConfirmSenha] = useState("")
    const [error, setError] = useState("")

    const criarUsuario = async (nome, pessoa, email, senha, confirmSenha) => {
        if (senha !== confirmSenha) {
            setError("As senhas devem ser iguais")
            return
        }

        const response = await signup(nome, pessoa, email, senha)

        if (response) {
            setError(response)
        }

        navigate("/signin")
    }

    const navigate = useNavigate()

    return (
        <div id="sign-bg">
            <main id="sign-in">
                <section>
                    <div className="logo">
                        <img src={Logo} alt="logo mooexpress" />
                        <h1>Crie a sua conta. É grátis!</h1>
                    </div>

                    <form
                        action=""
                        onSubmit={(event) => {
                            event.preventDefault()
                            criarUsuario(
                                nome,
                                pessoa,
                                email,
                                senha,
                                confirmSenha,
                            )
                            return
                        }}
                    >
                        <label className="campo" htmlFor="apelido">
                            <span>Como você quer ser chamado(a)?*</span>
                            <input
                                value={nome}
                                onChange={(event) => {
                                    setNome(event.target.value)
                                }}
                                type="text"
                                id="apelido"
                                placeholder="Exemplo: Novilho branco"
                                required
                            />
                            <span>
                                Aparecerá em seu perfil, anúncios e chats.
                            </span>
                        </label>

                        <div className="campo pessoa">
                            <span>Escolha o tipo da sua conta:</span>

                            <div>
                                <label
                                    htmlFor="pessoa1"
                                    onClick={() => setPersonSelected("CPF")}
                                >
                                    <input
                                        type="radio"
                                        name="pessoa"
                                        id="pessoa1"
                                        defaultChecked
                                    />
                                    Pessoa Física
                                </label>
                                <label
                                    htmlFor="pessoa2"
                                    onClick={() => setPersonSelected("CNPJ")}
                                >
                                    <input
                                        type="radio"
                                        name="pessoa"
                                        id="pessoa2"
                                    />
                                    Pessoa Jurídica
                                </label>
                            </div>
                        </div>

                        <label className="campo" htmlFor="pessoa">
                            <span>{personSelected}*</span>
                            <input
                                value={pessoa}
                                onChange={(event) => {
                                    setPessoa(event.target.value)
                                }}
                                type="text"
                                name="pessoa"
                                id="pessoa"
                                required
                            />
                        </label>

                        <label className="campo" htmlFor="email">
                            <span>Email*</span>
                            <input
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="exemplo@mooexpress.com"
                                required
                            />
                            <span>Enviaremos um e-mail de confirmação</span>
                        </label>

                        <label className="campo" htmlFor="senha">
                            <span>Senha*</span>
                            <input
                                value={senha}
                                onChange={(event) => {
                                    setSenha(event.target.value)
                                }}
                                type="password"
                                name="senha"
                                id="senha"
                                required
                            />
                            <span>
                                Use letras, números e caracteres especiais
                            </span>
                        </label>

                        <label className="campo" htmlFor="confirm-senha">
                            <span>Confirmar Senha*</span>
                            <input
                                value={confirmSenha}
                                onChange={(event) => {
                                    setConfirmSenha(event.target.value)
                                }}
                                type="password"
                                name="confirmsenha"
                                id="confirm-senha"
                                required
                            />
                            <span>
                                Segunda senha deve ser igual a primeira.
                            </span>
                        </label>

                        <span style={{ color: "red" }}>{error}</span>

                        <button type="submit">Criar conta</button>
                    </form>

                    <span>
                        Já tem uma conta? <Link to="/signin">Entrar</Link>
                    </span>
                </section>

                <span>
                    Ao continuar, você concorda com os Termos de uso e a
                    Política de Privacidade da MooExpress e seus parceiros, e em
                    receber comunicações da MooExpress.
                </span>
            </main>
        </div>
    )
}

export default SignUp
