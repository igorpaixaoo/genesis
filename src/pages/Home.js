import '../styles/App.css';
import { Link, BrowserRouter } from 'react-router-dom';

import ButtonDefault from '../components/ButtonDefault';
import { useState } from 'react';

var typeDoc1 = false;
var typeDoc2 = false;
var typeDoc3 = false;

function App() {

  const [selectValue, setSelectValue] = useState(1);
  var obj = []

  var value1, value2, value3

  /**
   * lista de opções de documentos
   */
  const list = [
    {id: 1, name: 'Terreno p/ Construção'},
    {id: 2, name: 'Imóvel Residencial'},
    {id: 3, name: 'Terreno Agrícola'},
    
  ]

  const clickAvancar = () =>{
    if(selectValue-1 == 0){
      value1 = true;
    }else value1 = false
    if(selectValue-1 == 1){
      value2 = true
    }else value2 = false
    if(selectValue-1 == 2){
      value3 = true
    }else value3 = false

    /**
     * alert(list[selectValue-1].name)
     */ 
  }

  return (
    <div className="genesis">
      <header className="app">
        
      <h1>Tipo de Documento</h1>
      <select id="optionsDocs" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option selected>Selecione:</option>
        {list.map((item, index) => (
          <option value={item.id}>{item.name}</option>
          
        ))}
        
      </select>

      <ButtonDefault id="btnAvancar" text="Avançar" onClick={clickAvancar}></ButtonDefault>

      /**
       resolver esse bug KRAId*/
      {value1 &&(
        <p>value1d</p>
      )}
      {value2 &&(
        <p>value2d</p>
      )}
      {value3 &&(
        <p>value3d</p>
      )}

       
      </header>
    </div>
  );
}

export default App;
