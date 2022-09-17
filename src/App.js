import './App.css';
import Users from "./components/Users/Users";
import Launches from "./components/Launches/Launches";

function App() {
  return (
    <div className="App">
      <Users/>
      <hr/>
      <Launches/>
    </div>
  );
}

export default App;
