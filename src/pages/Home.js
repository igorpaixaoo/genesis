import '../styles/Home.css';
import { Link, BrowserRouter } from 'react-router-dom';

import Logo1 from '../util/logo1.png'
import ButtonDefault from '../components/ButtonDefault';
import Footer from '../components/Footer'

function App() {

  return (
    <div className="app">
      <div className='genesis'>
        <img src={Logo1} width="500px"></img>
        <Link to="/options"><ButtonDefault text="INICIAR" id="btnIniciar"></ButtonDefault></Link>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
