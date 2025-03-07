import React, { useState } from "react";

import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom"

//components
import FormVendedor from "../../components/TypeDoc1/forms/FormVendedor";
import FormComprador from "../../components/TypeDoc1/forms/FormComprador";
import ButtonDefault from "../../components/ButtonDefault"

import Object from "./Object";
import LandValue from "./LandValue";
import LimitsAndConfrontations from "../../components/TypeDoc1/LimitsAndConfrontations";

//booleans para renderizar cada componente
var personalDataEnabled = true;
var objectEnabled = false;
var landValue = false;
var terms = false;
var limitsAndConfrontations = false;
var finalConsiderations = false


function TypeDoc1() {
  
    //states para o numero de arrays de cada componente <FormVendedor> e <FormComprador> renderizado
    const [valueNumberArrayVendedor, setValueNumberArrayVendedor] = useState(0)
    const [valueNumberArrayComprador, setValueNumberArrayComprador] = useState(0)
    
    var nameForRadioVendedor = "generos-vendedor";
    var nameForRadioComprador = "generos-comprador";

    const btnNext = () =>{
    
    }
    
    const btnSave = () =>{
        
    }

    //Renderização condicional de cada componente
    return(
        <div>
            {personalDataEnabled &&(           
                <div className="personal-data">
                    <div>
                        {/**renderizar vários <FormVendedor> de acordo com o input */}
                        <input type="number" id="number-array-vendedor" onChange={e => setValueNumberArrayVendedor(e.target.value)} placeholder="Quant. de Vendedores:"></input>
                        {Array.from({length: valueNumberArrayVendedor}).map((_, index) => (
                            <div>
                                <p>{index+1}º </p>
                                <FormVendedor key={index} nameRadioVendedor={nameForRadioVendedor + index+1}></FormVendedor>
                            </div>
                        ))}
                    </div>
                    <br></br>
                    <div>
                        {/**renderizar vários <FormComprador> de acordo com o input */}
                        <input type="number" id="number-array-comprador" onChange={e => setValueNumberArrayComprador(e.target.value)} placeholder="Quant. de Compradores:"></input>
                        {Array.from({length: valueNumberArrayComprador}).map((_, index) => (
                            <div>
                                <p>{index+1}º </p>
                                <FormComprador key={index} nameRadioComprador={nameForRadioComprador + index+1}></FormComprador>
                            </div>
                        ))}
                    </div>
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
                    <LimitsAndConfrontations></LimitsAndConfrontations>
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