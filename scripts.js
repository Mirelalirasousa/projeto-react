const linkCriarUmaConta = <a class= "link" href="/conta">Criar uma conta</a>

const fazerLogin = <a class= "link" href="/login">Fazer Login</a>

const formularioLogin = (
    <form>
        {[linkCriarUmaConta, fazerLogin]}
        </form>
)
const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(formularioLogin, divisaoProjeto)