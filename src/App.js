import './App.css';
import Users from "./components/Users/Users";
import Launches from "./components/Launches/Launches";

function App() {
  return (
    <div className="App">
      <Users></Users>
      <hr/>
      <Launches></Launches>
    </div>
  );
}

export default App;
