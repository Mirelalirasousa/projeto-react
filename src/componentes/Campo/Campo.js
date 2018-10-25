import React from 'react'
import './Campo.css'

function Campo(props) {
    return (
        <input
        id={props.id} 
        className="caixa-texto"
         type={props.type} 
         name={props.name} 
         placeholder={props.placeholder}/>
    )

}

export default Campo