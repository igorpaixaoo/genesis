import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";

import Home from "./pages/Home"
import Options from "./pages/Options";
import TypeDoc1 from "./pages/TypeDoc1/PersonalData";
import TypeDoc2 from "./pages/TypeDoc2/TypeDoc2";
import TypeDoc3 from "./pages/TypeDoc3/TypeDoc3";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/options" element={<Options/>}></Route>
        <Route path="/typedoc1" element={<TypeDoc1/>}></Route>
        <Route path="/typedoc2" element={<TypeDoc2/>}></Route>
        <Route path="/typedoc3" element={<TypeDoc3/>}></Route>
      </Routes >
    </Router>
  );
}

export default App;
