import '../styles/Home.css';
import { Link, BrowserRouter } from 'react-router-dom';

import ButtonDefault from '../components/ButtonDefault';
import { useState } from 'react';

//string da route
var typeDoc = ""

function App() {

  const [selectValue, setSelectValue] = useState(1);
  var obj = []


  //booleans states para o item da lista de opções
  var typeDoc1 = false;
  var typeDoc2 = false;
  var typeDoc3 = false;

  /**
   * lista de opções de documentos
   */
  const list = [
    {id: 1, name: 'Selecione:'},
    {id: 2, name: 'Terreno p/ Construção'},
    {id: 3, name: 'Imóvel Residencial'},
    {id: 4, name: 'Terreno Agrícola'},
  ]

  //função para verificar as opções escolhida e onClick
  //RESOLVER BUG de atualização das opções
  const clickAvancar = () =>{
    if(selectValue-1 == 1){
      typeDoc1 = true
    }
    if(selectValue-1 == 2){
      typeDoc2 = true
    }
    if(selectValue-1 == 3){
      typeDoc3 = true
    }

    //verify the document type
    if(typeDoc1){
      typeDoc = "/typedoc1"
    }
    if(typeDoc2){
      typeDoc = "/typedoc2"
    }
    if(typeDoc3){
      typeDoc = "/typedoc3"
    }

    /**
     * alert(list[selectValue-1].name)
     */ 
  }

  return (
    <div className="genesis">
      <header className="app">
        
      <h1>Tipo de Documento</h1>
      <select id="optionsDocs" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        {list.map((item, index) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>

      <Link to={typeDoc}><ButtonDefault id="btnAvancar" text="Avançar" onClick={clickAvancar}></ButtonDefault></Link>
       
      </header>
    </div>
  );
}

export default App;
