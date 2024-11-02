import '../styles/Home.css';
import { Link, BrowserRouter } from 'react-router-dom';

import Logo1 from '../util/logo1.png'
import ButtonDefault from '../components/ButtonDefault';

function App() {

  return (
    <div className="genesis">
      <img src={Logo1} width="500px"></img>
      <Link to="/options"><ButtonDefault text="Iniciar"></ButtonDefault></Link>
    </div>
  );
}

export default App;
