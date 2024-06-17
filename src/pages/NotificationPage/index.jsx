import HeaderOnLine from "../../components/HeaderOnLine"
import Footer from "../../components/Footer"
import "./style.css"

function NotificationPage() {
    return (
        <>
            <HeaderOnLine />
            <main id="notificacao">
                <div>
                    <h1>Notificações</h1>
                    <div>
                        <i class="bi bi-bell"></i>
                        <p>Você não tem nenhuma notificação</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotificationPage
