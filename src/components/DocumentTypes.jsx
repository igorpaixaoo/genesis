
const DocumentTypes = (props) =>{
    return(
        <select id={props.id} onChange={props.onChange}>
            <option>Selecione:</option>
            <option value={1}>Compra e Venda</option>
            <option value={2}>Doação</option>
            <option value={3}>Direito de Posse</option>
            <option value={4}>Herança</option>
        </select>
    )
}

export default DocumentTypes