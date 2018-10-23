
// // <a class="link" href="/conta">Criar uma conta</a>

// const linkCriarUmaConta = document.createElement('a')
// linkCriarUmaConta.className = 'link'
// linkCriarUmaConta.href = '/conta'
// linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))


const linkCriarUmaConta = React.createElement ('a', {
    className: 'link',
    herf: '/conta',
    children: 'criar uma conta'
    
})

const fazerLogin = React.createElement ('a', {
    className: 'link',
    herf: '/conta',
    children: 'fazer login'
    
})

const formularioLogin = React.createElement('form',{
    children: [linkCriarUmaConta, fazerLogin]
})
const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(formularioLogin, divisaoProjeto)

// const linkFazerLogin = document.createElement('a')
// linkFazerLogin.className = 'link'
// linkFazerLogin.href = '/conta'
// linkFazerLogin.appendChild(document.createTextNode('Fazer uma conta'))

// const formularioLogin = document.createElement('form')
// formularioLogin.appendChild(linkCriarUmaConta)
// formularioLogin.appendChild(linkFazerLogin)


// const divisaoProjeto = document.getElementById('projeto')
// divisaoProjeto.appendChild(formularioLogin)


