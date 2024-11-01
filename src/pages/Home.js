import '../styles/Home.css';
import { Link, BrowserRouter } from 'react-router-dom';

import ButtonDefault from '../components/ButtonDefault';
import { useState } from 'react';

//string da route
var typeDoc = ""

function App() {

  const [selectValue, setSelectValue] = useState(0);

  //função para verificar as opções escolhida e onClick
  //RESOLVER BUG de atualização das opções (resolvido)
  //verify the document type
  if(selectValue == 1){
    typeDoc = "/typedoc1"
  }
  if(selectValue == 2){
    typeDoc = "/typedoc2"
  }
  if(selectValue == 3){
    typeDoc = "/typedoc3"
  }

  return (
    <div className="genesis">
      <header className="app">
        
      <h1>Tipo de Documento</h1>
      <select id="optionsDocs" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option>Selecione:</option>
        <option value={1}>Terreno p/ Construção</option>
        <option value={2}>Imóvel Residencial</option>
        <option value={3}>Terreno Agrícola</option>
      </select>

      <Link to={typeDoc}><ButtonDefault id="btnAvancar" text="Avançar" ></ButtonDefault></Link>
       
      </header>
    </div>
  );
}

export default App;
