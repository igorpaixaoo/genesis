import React from "react";

import App from "../styles/App.css"

const ButtonDefault = (props) => {

    return(
        <button id={props.id} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
    ) 
} 

export default ButtonDefault;