
//components
import LandMeasurement from "../../components/TypeDoc1/LandMeasurement"
import StatesList from "../../components/StatesList"
import DocumentTypes from "../../components/DocumentTypes"

const Object = () =>{
    return(
        <div className="part1">
           <h1>Objeto:</h1>
           <input type="number" placeholder="Quant. de Terrenos" id="quant-terrenos"></input>
           <LandMeasurement></LandMeasurement>
           <div className="land-address">
                <p>Endereço:</p>
                <input type="text" id="rua-terreno" placeholder="Rua:"/>
                <input type="text" id="numero-terreno" placeholder="Número:"></input>
                <input type="text" id="bairro-terreno" placeholder="Bairro:"></input>
                <input type="text" id="cidade-terreno" placeholder="Cidade:"></input>
                <StatesList id="states-list-land"></StatesList>
            </div>
            <div className="acquisition">
                <p>Aquisição do Vendedor:</p>
                <input id="nome-completo" placeholder="Nome completo:"/>
                <label>Tipo de aquisição:</label>
                <DocumentTypes></DocumentTypes>
                <label>Data de aquisição:</label>
                <input type="date" id="data-aquisicao"/>
            </div>
        </div>
    )
}

export default Object