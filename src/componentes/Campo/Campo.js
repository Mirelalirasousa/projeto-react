import React from 'react'
import './Campo.css'

class Campo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            erro: ''
        }
    }

    valida = (evento) => {
        const input = evento.target

        if (this.props.required && input.value.trim() === '') {
            this.setState({erro: 'Campo obrigatório'})
            console.log('1')
            }else if (this.props.minLength && input.value.length < this.props.minLength){
                this.setState({erro:`Digite pelo menos ${this.props.minLength} carácteres`})
                console.log('2')
            }else {
                this.setState({erro:''})
                console.log('4')
            }

        }

    render() {
        return (
            <div>
                <input
                    id={this.props.id}
                    className="caixa-texto" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}
                    onChange={this.valida} />

                <p className="grupo__erro"> {this.state.erro}</p>

            </div>
        )
    }
}

export default Campo
