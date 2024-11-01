
//component para observação do pagamento
const PaymentConditionObs = (props) =>{
    return(
        <div>
            <label>{props.label}</label>
            <textarea value={props.value}></textarea>
        </div>
    )
}

export default PaymentConditionObs