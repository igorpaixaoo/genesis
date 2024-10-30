import React from "react";

//components
import CountrysList from "../../components/TypeDoc1/CountrysList";
import IdTypes from "../../components/TypeDoc1/IdTypes";

function TypeDoc1() {

    return(
        <div className="personal-data">
            <div className="vendedor">
                <div className="part1">
                    <input type="text" placeholder="Nome completo:" id="nome-vendedor"></input>
                    <label>Nacionalidade:</label>
                    <CountrysList id="country-list-vendedor"></CountrysList>
                    <input type="text" id="profissao-vendedor"/>
                </div>

                <div className="part2">
                    <label>Tipo de documento:</label>           
                    <IdTypes id="type-id-vendedor"></IdTypes>

                    TERMINAR ESSA PORRA----
                </div>
            </div>
            <div className="comprador">

            </div>
        </div>
    );
}

export default TypeDoc1;