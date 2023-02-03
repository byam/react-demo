import { BrowserRouter } from "react-router-dom";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello WAA!</h1>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
