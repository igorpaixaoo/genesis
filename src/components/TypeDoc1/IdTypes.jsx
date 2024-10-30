import React from "react";

const IdTypes = (props) =>{
    return(
        <select id={props.id}>
            <option value="">Selecione:</option>
            <option value="RG">RG (Registro Nacional)</option>
            <option value="CNH">CNH (Carteira Nacional de Habilitação)</option>
            <option value="RNE">RNE (Registro Nacional de Estrangeiro)</option>
            <option value="CTPS">CTPS (Carteira de Trabalho)</option>
        </select>
    )
}

export default IdTypes;