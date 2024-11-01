
import { IMaskInput } from "react-imask";

//components util
import CountrysList from "../../CountrysList";
import IdTypes from "../../IdTypes";
import StatesList from "../../StatesList";

const FormComprador = (props) =>{
    return(
        <div className="comprador">
            <h1>Comprador</h1>
            <div className="part1">
                <p>Informações pessoais:</p>
                <input type="text" placeholder="Nome completo:" id="nome-comprador"></input>
                <label>Nacionalidade:</label>
                <CountrysList id="country-list-comprador"></CountrysList>
                <div className="generos-comprador">
                    <label>Gênero:</label>
                    {/** cada componente renderizado <FormComprador> será gerado um input(radio) diferente */}
                    <input type="radio" value="Masculino" id="genero-masculino-comprador" name={props.nameRadioComprador}></input>
                    <label for="genero-masculino">Masculino</label>
                    <input type="radio" value="Feminino" id="genero-feminino-comprador" name={props.nameRadioComprador}></input>
                    <label for="genero-feminino">Feminino</label>
                </div>
                <input type="text" id="profissao-comprador" placeholder="Profissão:"/>
            </div>

            <div className="part2">
                <label>Tipo de documento:</label>           
                <IdTypes id="type-id-comprador"></IdTypes>
                <input type="text" id="id-comprador" placeholder="Número:"></input>
                <input type="text" id="orgao-expedidor-comprador" placeholder="Orgão Expedidor:"></input>
                <IMaskInput mask="000.000.000-00" placeholder="CPF:" id="cpf-comprador"></IMaskInput>
            </div>

            <div className="part3">
                <p>Endereço:</p>
                <input type="text" id="rua-comprador" placeholder="Rua:"/>
                <input type="text" id="numero-comprador" placeholder="Número:"></input>
                <input type="text" id="bairro-comprador" placeholder="Bairro:"></input>
                <input type="text" id="cidade-comprador" placeholder="Cidade:"></input>
                <label>Estado:</label>
                <StatesList></StatesList>
            </div>
        </div>
    )
}

export default FormComprador;