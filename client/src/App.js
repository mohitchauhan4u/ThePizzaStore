import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
