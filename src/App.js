import Simpsons from "./components/Simpsons/Simpsons";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import './App.css';

function App() {
  return (
    <div className="App">
      <Simpsons>
        <h1>Simpsons</h1>
      </Simpsons>
      <h2>Rick and Morty</h2>
      <RickAndMorty></RickAndMorty>
    </div>
  );
}

export default App;
