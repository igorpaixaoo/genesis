
import { IMaskInput } from "react-imask";

//components util
import CountrysList from "../../CountrysList";
import IdTypes from "../../IdTypes";
import StatesList from "../../StatesList";

const FormVendedor = () =>{
    return(
        <div className="vendedor">
            <h1>Vendedor:</h1>
            <div className="part1">
                <input type="text" placeholder="Nome completo:" id="nome-vendedor"></input>
                <label>Nacionalidade:</label>
                <CountrysList id="country-list-vendedor"></CountrysList>
                <input type="text" id="profissao-vendedor" placeholder="Profissão:"/>
            </div>

            <div className="part2">
                <label>Tipo de documento:</label>           
                <IdTypes id="type-id-vendedor"></IdTypes>
                <input type="text" id="id-vendedor" placeholder="Número:"></input>
                <input type="text" id="orgao-expedidor-vendedor" placeholder="Orgão Expedidor:"></input>
                <IMaskInput mask="000.000.000-00" placeholder="CPF:" id="cpf-vendedor"></IMaskInput>
            </div>

            <div className="part3">
                <input type="text" id="rua-vendedor" placeholder="Rua:"/>
                <input type="text" id="numero-vendedor" placeholder="Número:"></input>
                <input type="text" id="bairro-vendedor" placeholder="Bairro:"></input>
                <input type="text" id="cidade-vendedor" placeholder="Cidade:"></input>
                <StatesList></StatesList>
            </div>
        </div>
    )
}

export default FormVendedor;