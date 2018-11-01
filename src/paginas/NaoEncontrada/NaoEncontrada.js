import React from 'react'
import './NaoEncontrada.css'
import naoencontrada from './naoencontrada.jpg'

function NaoEncontrada(){
    return(
        <main className="nao-encontrada">
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada__simbolo">
          :-(
         </p>
         <img src={naoencontrada} alt="Página Não Encontrada"/>
        </main>
    )
}

export default NaoEncontrada