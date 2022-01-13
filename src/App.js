import "./App.css";
//Axios
import axios from "axios";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
axios.defaults.baseURL = "https://restcountries.com/v3.1";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/:name" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
