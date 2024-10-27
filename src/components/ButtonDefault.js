import React from "react";

const ButtonDefault = (props) => {

    return(
        <button id={props.id} onClick={props.onClick}>{props.text}</button>
    ) 
} 

export default ButtonDefault;