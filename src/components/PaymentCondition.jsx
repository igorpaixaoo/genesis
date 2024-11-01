//component para condições de pagamento
const PaymentCondition = (props) =>{
    return(
        <div>
            <label>Condição do pagamento:</label>
            <select value={props.value} onChange={props.onChange} id={props.id}>
                <option>Selecione:</option>
                <option value={1}>À vista</option>
                <option value={2}>À prazo</option>
            </select>
        </div>
    )
}

export default PaymentCondition