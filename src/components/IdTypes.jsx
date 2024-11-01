import React from "react";

const IdTypes = (props) =>{
    return(
        <select id={props.id}>
            <option value="">Selecione:</option>
            <option value="RG">RG</option>
            <option value="CNH">CNH</option>
            <option value="CTPS">CTPS (Carteira de Trabalho)</option>
        </select>
    )
}

export default IdTypes;