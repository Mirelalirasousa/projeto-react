import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import './index.css'

function App() {
    return (
        <div className="app">   
        {/* <Navbar>*/ }

        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/login" component={Login}/>
            <Route path="/quem-somos" component={QuemSomos}/>
            <Route path="/contato" component={Contato}/>
        </Switch>
        </div>
    )
}

// const props = {url:'/conta', children: 'Criar uma conta' }

const divisaoProjeto =

    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, document.getElementById('projeto'))
