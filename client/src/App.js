import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  );
}

export default App;
