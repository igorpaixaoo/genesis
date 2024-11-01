
//components
import { useState } from "react";
import PaymentCondition from "../../components/PaymentCondition"
import PaymentConditionObs from "../../components/PaymentConditionObs"

const LandValue = () =>{

    //renderizar o componente do acordo do pagamento
    const [optionPaymentCondition, setOptionPaymentCondition] = useState(0)

    return(
        <div className="land-value">
            <input type="text" id="valor-terreno" placeholder="Valor do terreno: R$"></input>
            <PaymentCondition value={optionPaymentCondition} onChange={e => setOptionPaymentCondition(e.target.value)}></PaymentCondition>

           
            {optionPaymentCondition == 2 && (
                //criar variavel value
                <PaymentConditionObs label="Acordo:" value={""}></PaymentConditionObs>
            )}

        </div>
    )
}

export default LandValue