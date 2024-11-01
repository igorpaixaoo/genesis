import React from "react";

import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//components
import FormVendedor from "../../components/TypeDoc1/forms/FormVendedor";
import FormComprador from "../../components/TypeDoc1/forms/FormComprador";
import ButtonDefault from "../../components/ButtonDefault"

import Object from "./Object";
import LandValue from "./LandValue";

//booleans para renderizar cada componente
var personalDataEnabled = false;
var objectEnabled = false;
var landValue = true;
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
                </div>
            )}
            {objectEnabled && (
                <div className="object">
                    <Object></Object>
                </div>
            )}
            {landValue && (
                <div className="land-value">
                    <LandValue></LandValue>
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