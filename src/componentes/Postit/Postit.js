import  React, { Component } from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'


class Postit extends Component{
    constructor(props){
        super(props)
    }


    cadastraOuAlteraPostit = (evento) =>{
        evento.preventDefault()

        const form = evento.target

        const dados ={
            id:`a997b75b-0084-4913-ac8a-3ab6fed1b73e${Math.random(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }

        this.props.cadastraPostit(dados)
        form.reset()
    } 

    render() {
        const cadastrando = !this.props.id
        
        return(
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
            <input 
                className="postit__titulo"
                type="text"
                name="titulo"
                placeholder="Titulo"
                autoComplete="off"
                defaultValue={this.props.titulo}
            />

            <textarea
                className="postit__texto"
                name="texto"
                placeholder="Digite um texto..."
                rows={5}
                autoComplete="off"
                defaultValue={this.props.texto}
            />

            <button className="postit__botao-concluir">
                Concluido
            </button>     
            
            </form>
        )
    }
}

export default connect (
    null,
    { cadastraPostit }
    
) (Postit)

