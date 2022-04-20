import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/policy" component={Policy}></Route>
        <Route exact path="/" component={HomeScreen}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
