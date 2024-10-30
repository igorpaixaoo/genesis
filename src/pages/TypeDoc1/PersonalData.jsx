import React from "react";

import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//components
import FormVendedor from "../../components/TypeDoc1/forms/FormVendedor";
import FormComprador from "../../components/TypeDoc1/forms/FormComprador";
import ButtonDefault from "../../components/ButtonDefault"

//booleans para renderizar cada componente
var personalDataEnabled = true;
var objectEnabled = false;
var landValue = false;
var terms = false;
var limitsAndConfrontations = false;
var finalConsiderations = false


const btnNext = () =>{


}

const btnSave = () =>{
    
}

function TypeDoc1() {

    //Renderização condicional de cada componente
    return(
        <div>
            {personalDataEnabled &&(           
                <div className="personal-data">
                    <FormVendedor></FormVendedor>
                    <br></br>
                    <FormComprador></FormComprador>
                    <ButtonDefault text="Salvar" id="btn-salvar-typeDoc1" disabled="true"></ButtonDefault>
                    <ButtonDefault text="Avançar" id="btn-next-typeDoc1" disabled="true"></ButtonDefault>
                </div>
            )}
            {objectEnabled && (
                <div className="object">

                </div>
            )}
            {landValue && (
                <div className="land-value">
                    
                </div>
            )}
            {terms && (
                <div className="terms">
                    
                </div>
            )}
            {limitsAndConfrontations && (
                <div className="limits-and-confrontations">
                    
                </div>
            )}
            {finalConsiderations && (
                <div className="final-considerations">
                    
                </div>
            )}
        </div>

    );
}

export default TypeDoc1;