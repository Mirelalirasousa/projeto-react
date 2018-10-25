import React from 'react'
import './Legenda.css'


/*
<leganda htmlFor="email">Email:</legenda>

const props = {
    htmlFor: 'email', 
    children: 'Email:'
}
*/

function Legenda(props) {
    return (
        <label className="legenda" htmlFor={props.htmlfor}>
        {props.children}
        </label>

    )
}

export default Legenda