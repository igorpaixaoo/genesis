import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home"
import TypeDoc1 from "./pages/TypeDoc1";
import TypeDoc2 from "./pages/TypeDoc2";
import TypeDoc3 from "./pages/TypeDoc3";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/typedoc1" component={TypeDoc1}></Route>
        <Route path="/typedoc2" component={TypeDoc2}></Route>
        <Route path="/typedoc3" component={TypeDoc3}></Route>
      </Switch>
    </Router>
  );
}

export default App;
